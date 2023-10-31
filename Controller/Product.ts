import ProductModel from "../Model/ProductModel";
import response from "../HttpRespose/HttpRespose";

export default {
    createProduct: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const newProduct = await ProductModel.create(req.body);
            response.handleSuccess(res, newProduct , 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    getProducts: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.find().populate('category',{_id:1,name:1})
            .populate('created_by',{_id:1,name:1}).populate('images');
            response.handleSuccess(res, newProduct , 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    findByIdProducts: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.find(req.query).populate('category',{_id:1,name:1})
            .populate('created_by',{_id:1,name:1}).populate('images');
            response.handleSuccess(res, newProduct , 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
}