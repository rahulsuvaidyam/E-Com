import AddressModel from "../Model/AddressModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetAddress: async (req: any, res: any) => {
        try {
            const address = await AddressModel.find({ user: req.user._id }).populate('state').populate('district');
            response.handleSuccess(res, address, 'Address List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetAddressbuyproduct: async (req: any, res: any) => {
        try {
            const address = await AddressModel.findOne({user:req.query.user,status:'active'}).sort({ updatedAt: -1 }).populate('state').populate('district');
            response.handleSuccess(res, address, 'Address List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostAddress: async (req: any, res: any) => {
        try {
            req.body['user'] = req.user._id;
            const address = await AddressModel.create(req.body);
            response.handleSuccess(res, address, 'Address Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutAddress: async (req: any, res: any) => {
        try {
            req.body['user'] = req.user._id;
            const address = await AddressModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, address, 'Address Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteAddress: async (req: any, res: any) => {
        try {
            const address = await AddressModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, address, 'Address Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
 
}