import EventModel from "../Model/EventModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetEvent: async (req: any, res: any) => {
        try {
            const newProduct = await EventModel.find({created_by:req.user._id}).populate('image');
            response.handleSuccess(res, newProduct , 'Event List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostEvent: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const newProduct = await EventModel.create(req.body);
            response.handleSuccess(res, newProduct , 'Event Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutEvent: async (req: any, res: any) => {
        try {
            req.body['modified_by'] = req.user._id;
            const Event = await EventModel.findByIdAndUpdate(req.body._id,req.body,{new:true});
            response.handleSuccess(res,Event,'Event Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteEvent: async (req: any, res: any) => {
        try {
            const Event = await EventModel.findByIdAndDelete(req.body);
            response.handleSuccess(res,Event,'Event Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    GetOccasion: async (req: any, res: any) => {
        try {
            const category = await EventModel.find({name: {
                $in: ["Happy Birthday", "Happy Anniversary"]
            }}).populate('image');
            response.handleSuccess(res, category, 'Event List')

        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
   
}