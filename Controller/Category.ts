import CategoryModel from '../Model/CategoryModel'
import response from '../HttpRespose/HttpRespose'
export default {
    Get: async (req: any, res: any) => {
        try {
            const category = await CategoryModel.find().populate('image');
            response.handleSuccess(res, category, 'Category List')

        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    GetDropDown: async (req: any, res: any) => {
        try {
            const category = await CategoryModel.find({}, { _id: 1, name: 1 });
            response.handleSuccess(res, category, 'Category List')

        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    Post: async (req: any, res: any) => {
        try {
            if (req.body.name) {
                const category = await CategoryModel.findOne({ $and: [{ name: { $regex: req.body.name, $options: 'i' } }] });
                console.log(category)
                console.log(req.body)
                if (category) {
                    response.badRequest(res, 'Duplicate category')
                } else {
                    const categorycreate = await CategoryModel.create(req.body);
                    response.handleSuccess(res, categorycreate, 'Category created.')
                }
            } else {
                response.badRequest(res, 'name is required')
            }

        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    PutCategory: async (req: any, res: any) => {

        try {
            const category = await CategoryModel.findByIdAndUpdate(req.body._id,req.body,{new:true});
            response.handleSuccess(res,category,'Category Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteCategory: async (req: any, res: any) => {
        try {
            const product = await CategoryModel.findByIdAndDelete(req.body);
            response.handleSuccess(res,product,'Category Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
}