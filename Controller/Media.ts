import MediaModel from "../Model/MediaModel";
import response from "../HttpRespose/HttpRespose";
import cloudinary from "../cloud.config";

export default {
    createMedia: async (req: any, res: any) => {
        try {
            let file = req.files.image;

            await cloudinary.uploader.upload(file.tempFilePath)
                .then(async (result: any) => {

                    req.body['created_by'] = req.user._id;
                    req.body['url'] = result.secure_url;
                    req.body['mimetype'] = result.resource_type + '/' + result.format;
                    const newMedia = await MediaModel.create(req.body);
                    response.handleSuccess(res, { _id: newMedia._id, url: newMedia.url }, 'File Uploaded Successfully.')
                    
                })
                .catch((error: any) => {
                    console.error('Error uploading file to Cloudinary:', error);
                });

        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    },
    deleteMediaPermanent: async (req: any, res: any) => {
        try {
            const deletedMedia = await MediaModel.findByIdAndDelete(req.body._id, { new: true });
            response.handleSuccess(res, { _id: deletedMedia?._id }, 'File Deleted Successfully.');
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    }
}