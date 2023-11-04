import express from 'express';
const EventRouter = express.Router();

import Event from '../Controller/Event';

EventRouter.get('/event',Event.GetEvent);
EventRouter.post('/event',Event.PostEvent);
EventRouter.put('/event',Event.PutEvent);
EventRouter.delete('/event',Event.DelteEvent);
export default EventRouter;