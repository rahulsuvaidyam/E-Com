import stateModel from "../Model/StateModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetState: async (req: any, res: any) => {
        try {
            // { created_by: req.user._id }
            const state = await stateModel.find();
            response.handleSuccess(res, state, 'state List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostState: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const state = await stateModel.create(req.body);
            response.handleSuccess(res, state, 'state Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutState: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const state = await stateModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, state, 'state Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteState: async (req: any, res: any) => {
        try {
            const state = await stateModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, state, 'state Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
 
}