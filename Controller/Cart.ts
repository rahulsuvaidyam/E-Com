import CartModel from "../Model/CartModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetCart: async (req: any, res: any) => {
        try {
            const cart = await CartModel.find({ user: req.user._id }).populate('product').populate({
                path:"product",select:'_id name price discounts',
                populate:[
                    {path:'images',select:'_id url'},
                    {path:'category',select:'_id name'}
                ]
            }).select("_id user count");
            response.handleSuccess(res, cart, 'Cart List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetCartToBuy : async (req:any,res:any) => {
        try {
            const cart = await CartModel.find({
                _id: { $in: req.query._id }
              })
              .populate('product')
              .populate({
                path: "product",
                select: '_id name price discounts',
                populate: [
                  { path: 'images', select: '_id url' },
                  { path: 'category', select: '_id name' }
                ]
              })
              .select("_id user count");
              response.handleSuccess(res, cart, 'Item add to buy')
              
        } catch (error) {
            response.somethingWentWrong(res);
        }
    },
    PostCart: async (req: any, res: any) => {
        try {
            const cartfind = await CartModel.findOne(req.body)
            if(!cartfind){
                req.body['user'] = req.user._id;
                const cart = await CartModel.create(req.body);
                response.handleSuccess(res, cart, 'Item add to cart')
            }else{
                response.handleSuccess(res, 'Item on cart');
            }

        } catch (error) { 
            response.somethingWentWrong(res);
        }
    },
    PutCart: async (req: any, res: any) => {
        try {
            const cart = await CartModel.findByIdAndUpdate({_id:req.body._id}, { count: req.body.value }, // Use $inc to increment the 'count' field by 1
            { new: true });
            response.handleSuccess(res, cart, 'Item qty update');
          
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    
    DelteCart: async (req: any, res: any) => {
        try {
            const cart = await CartModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, cart, 'Item remove to cart');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
   
    GetCartCount: async (req: any, res: any) => {
        try {
            const cart = await CartModel.count({ user: req.user._id });
            response.handleSuccess(res, cart, 'Cart List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
}