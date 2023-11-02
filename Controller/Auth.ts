import UserModel from '../Model/UserModel'
import response from '../HttpRespose/HttpRespose'
import bcrypt from 'bcrypt'
import { generateToken } from '../JWT/index'
export default {
    Register: async (req: any, res: any) => {
        try {
            const { name, email, phone, password, role,gender ,details} = req.body;
            if (!name && !email && !phone && !password) {
                response.badRequest(res, 'All fields are required')
            } else {
                const existingEmail = await UserModel.findOne({ email })
                const existingPhone = await UserModel.findOne({ phone })
                if (existingEmail) {
                    response.badRequest(res, 'Email already exits')
                } else if (existingPhone) {
                    response.badRequest(res, 'Phone number already exits')
                } else {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const User = await UserModel.create({ name, email, phone,details, password: hashedPassword, role,gender });
                    response.handleSuccess(res, User, 'User registered')
                }
            }
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    Login: async (req: any, res: any) => {
        try {
            const { username, password } = req.body;
            let User = await UserModel.findOne({ email:username }) || await UserModel.findOne({ phone:username });
            if (!User) {
                response.handleNotFound(res, 'Incorrect Email Or Phone Number');
            } else {
                const passwordMatch = await bcrypt.compare(password, User.password);
                if (!passwordMatch) {
                    response.unAuthorized(res, 'Password Incorrect.');
                } else {
                    const token = generateToken({ _id: User._id, name: User.name, email: User.email, phone: User.phone,gender:User.gender });
                    const userDetail = await UserModel.findOne(
                        { _id: User._id },
                        { _id: 1, name: 1, email: 1, phone: 1 ,gender:1,role:1}
                    );
                    response.handleSuccess(res, { userDetail, token }, 'User LoggedIn.');
                }
            }
        } catch (error) {
            console.log("Exception", error);
            return response.somethingWentWrong(res);
        }
    }
}