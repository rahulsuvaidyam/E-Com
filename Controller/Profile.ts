import UserModel from '../Model/UserModel'
import response from '../HttpRespose/HttpRespose'
export default {
    ProfilePut: async (req: any, res: any) => {
        try {
             const user = await UserModel.findByIdAndUpdate(req.body._id,req.body,{
                new: true,
                select: '_id name email gender phone role'
              });
             response.handleSuccess(res,user,'Profile Updated.')
           
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
}