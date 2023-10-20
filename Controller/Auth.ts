import UserModel from '../Model/UserModel'
import response from '../HttpRespose/HttpRespose'
import bcrypt from 'bcrypt'
export default {
    Register: async (req: any, res: any) => {
        try {
            const { name, email, phone, password, role } = req.body;
            if (!name && !email && !phone && !password && !role) {
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
                    const User = await UserModel.create({ name, email, phone, password: hashedPassword, role });
                    response.handleSuccess(res, User, 'User registered')
                }
            }
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    Login: async (req: any, res: any) => {

    }
}