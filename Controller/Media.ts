import MediaModel from "../Model/MediaModel";
import response from "../HttpRespose/HttpRespose";
import fs from 'fs';
import path from "path";

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
            const imagePath = path.join(__dirname, '../' + deletedMedia?.url);
    
            if (fs.existsSync(imagePath)) {
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        return res.status(400).json({ message: "Error deleting image", err });
                    }
                    return res.status(200).json({ message: `File and Image Successfully Deleted`, _id: deletedMedia?._id });
                });
            } else {
                return res.status(400).json({ message: "Image not found" });
            }
        } catch (error) {
            console.error(error);
            response.somethingWentWrong(res);
        }
    }
    
    
}
