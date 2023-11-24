import response from "../HttpRespose/HttpRespose";
import PaytmCheckSum from '../PaytmChecksum'

export default {
    GetPayment: async (req: any, res: any) => {
        try {
         
            response.handleSuccess(res, 'Product List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostPayment: async (req: any, res: any) => {
        try {
            // req.body['created_by'] = req.user._id;
            // const newProduct = await ProductModel.create(req.body);
            response.handleSuccess(res, 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutPayment: async (req: any, res: any) => {
        try {
            // req.body['modified_by'] = req.user._id;
            // const product = await ProductModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, 'Product Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DeltePayment: async (req: any, res: any) => {
        try {
            // const product = await ProductModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, 'Product Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },

}