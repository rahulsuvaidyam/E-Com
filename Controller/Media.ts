import MediaModel from "../Model/MediaModel";
import response from "../HttpRespose/HttpRespose";

export default {
    createMedia: async (req: any, res: any) => {
        try {
            req.body['created_by'] = req.user._id;
            req.body['url'] = req.file.path;
            req.body['mimetype'] = req.file.mimetype;
            const newMedia = await MediaModel.create(req.body);
            response.handleSuccess(res, { _id: newMedia._id, url: newMedia.url }, 'File Uploaded Successfully.')
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    deleteMediaPermanent: async (req: any, res: any) => {
        try {
            const deletedMedia = await MediaModel.findByIdAndDelete(req.body._id, { new: true });
            response.handleSuccess(res, {_id:deletedMedia?._id}, 'File Deleted Successfully.');
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    }
}