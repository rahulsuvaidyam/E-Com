import CarouselModel from "../Model/CarouselModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetCarousel: async (req: any, res: any) => {
        try {
            const carousel = await CarouselModel.find({ created_by: req.user._id }).populate('images');
            response.handleSuccess(res, carousel, 'Carousel List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostCarousel: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const carousel = await CarouselModel.create(req.body);
            response.handleSuccess(res, carousel, 'Carousel Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutCarousel: async (req: any, res: any) => {
        try {
            req.body['modified_by'] = req.user._id;
            const carousel = await CarouselModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, carousel, 'Carousel Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteCarousel: async (req: any, res: any) => {
        try {
            const carousel = await CarouselModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, carousel, 'Carousel Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    GetShowCarousel: async (req: any, res: any) => {
        try {
            const carousel = await CarouselModel.find({status:"active"}).populate('images');
            response.handleSuccess(res, carousel, 'Carousel List')

        } catch (error) {
            response.somethingWentWrong(res)
        }
        
    },
   
}