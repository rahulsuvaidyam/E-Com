import ProductModel from "../Model/ProductModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetProduct: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.find({ created_by: req.user._id }).populate('category', { _id: 1, name: 1 })
                .populate('created_by', { _id: 1, name: 1 }).populate('images');
            response.handleSuccess(res, newProduct, 'Product List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostProduct: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const newProduct = await ProductModel.create(req.body);
            response.handleSuccess(res, newProduct, 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutProduct: async (req: any, res: any) => {
        try {
            req.body['modified_by'] = req.user._id;
            const product = await ProductModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, product, 'Product Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteProduct: async (req: any, res: any) => {
        try {
            const product = await ProductModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, product, 'Product Deleted.');
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
            const newProduct = await ProductModel.find(req.query).populate('category', { _id: 1, name: 1 })
                .populate('created_by', { _id: 1, name: 1 }).populate('images').populate('event',{name:1});
            response.handleSuccess(res, newProduct, 'Product Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetShowDetails: async (req: any, res: any) => {
        try {
            const newProduct = await ProductModel.findOne(req.query).populate('category', { _id: 1, name: 1 })
                .populate('created_by', { _id: 1, name: 1 }).populate('images');
            response.handleSuccess(res, newProduct, 'Product Details')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetSearch: async (req: any, res: any) => {
        try {
            if (req?.query?.name) {
                const newProduct = await ProductModel.find({ name: { $regex: req.query.name, $options: 'i' } }
                    , { name: 1, category: 1, images: { $slice: 1 } })
                    .populate('category', { _id: 1, name: 1 }).populate('images');
                response.handleSuccess(res, newProduct, 'Product list')
            } else {
                response.handleSuccess(res,[], 'Search Now')
            }
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    GetShowGrop: async (req: any, res: any) => {
        try {
            const groupedProducts = await ProductModel.aggregate([
                {
                    $match: {
                        event: { $ne: null }
                    }
                },
                {
                    $lookup: {
                        from: 'categories', // Replace 'categories' with the actual name of your categories collection
                        localField: 'category',
                        foreignField: '_id',
                        as: 'category',
                    },
                },
                {
                    $lookup: {
                        from: 'media', // Replace 'categories' with the actual name of your categories collection
                        localField: 'images',
                        foreignField: '_id',
                        as: 'images',
                    },
                },
                {
                    $unwind: '$category',
                },
                {
                    $group: {
                        _id: '$event', // Group by event key
                        products: {
                            $push: '$$ROOT', // Push the whole product object to the 'products' array
                        },
                    },
                },
                {
                    $lookup: {
                        from: 'events', // Replace 'events' with the actual name of your events collection
                        localField: '_id',
                        foreignField: '_id',
                        as: 'event',
                    },
                },
                {
                    $project: {
                        event: { $arrayElemAt: ["$event", 0] },
                        _id: 0,
                        products: {
                            $map: {
                                input: "$products",
                                as: "product",
                                in: {
                                    _id: "$$product._id",
                                    name: "$$product.name",
                                    price: "$$product.price",
                                    category: "$$product.category.name",
                                    discounts: "$$product.discounts",
                                    images: {
                                        $map: {
                                            input: "$$product.images",
                                            as: "image",
                                            in: {
                                                _id: "$$image._id",
                                                url: "$$image.url",
                                                mimetype: "$$image.mimetype"
                                            }
                                        },
                                    },
                                }
                            }
                        }
                    }
                }
            ]);
            response.handleSuccess(res, groupedProducts, 'Product Details')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },

}