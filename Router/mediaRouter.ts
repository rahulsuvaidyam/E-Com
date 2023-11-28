import express from 'express';
const MediaRouter = express.Router();

import Media from '../Controller/Media';
// import upload from '../DataBase/fileUpload';

MediaRouter.delete('/media',Media.deleteMediaPermanent);
MediaRouter.post('/media',Media.createMedia);
export default MediaRouter;