import express from 'express';
const MediaRouter = express.Router();

import Media from '../Controller/Media';

MediaRouter.delete('/Media',Media.deleteMediaPermanent);
MediaRouter.post('/Media',Media.createMedia);
export default MediaRouter;