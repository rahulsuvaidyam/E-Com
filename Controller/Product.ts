import ProductModel from "../Model/ProductModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetProduct: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.find({created_by:req.user._id}).populate('category',{_id:1,name:1})
            .populate('created_by',{_id:1,name:1}).populate('images');
            response.handleSuccess(res, newProduct , 'Product List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostProduct: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const newProduct = await ProductModel.create(req.body);
            response.handleSuccess(res, newProduct , 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutProduct: async (req: any, res: any) => {
        try {
            req.body['modified_by'] = req.user._id;
            const product = await ProductModel.findByIdAndUpdate(req.body._id,req.body,{new:true});
            response.handleSuccess(res,product,'Product Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteProduct: async (req: any, res: any) => {
        try {
            const product = await ProductModel.findByIdAndDelete(req.body);
            response.handleSuccess(res,product,'Product Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    GetShow: async (req: any, res: any) => {
        try {
            const category = await ProductModel.find().populate('image');
            response.handleSuccess(res, category, 'Product List')

        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    GetShowfindById: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.find(req.query).populate('category',{_id:1,name:1})
            .populate('created_by',{_id:1,name:1}).populate('images');
            response.handleSuccess(res, newProduct , 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetShowDetails: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.findOne(req.query).populate('category',{_id:1,name:1})
            .populate('created_by',{_id:1,name:1}).populate('images');
            response.handleSuccess(res, newProduct , 'Product Details')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
   
}