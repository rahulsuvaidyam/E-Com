import districtModel from "../Model/DistrictModel";
import response from "../HttpRespose/HttpRespose";

export default {
    GetDistrict: async (req: any, res: any) => {
        try {
            const district = await districtModel.find();
            response.handleSuccess(res, district, 'district List.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PostDistrict: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const district = await districtModel.create(req.body);
            response.handleSuccess(res, district, 'district Added Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    PutDistrict: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            const district = await districtModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
            response.handleSuccess(res, district, 'district Updated.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
    DelteDistrict: async (req: any, res: any) => {
        try {
            const district = await districtModel.findByIdAndDelete(req.body);
            response.handleSuccess(res, district, 'district Deleted.');
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
 
}