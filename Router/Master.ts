import express from 'express';
const MastRouter = express.Router();

import State from '../Controller/State';
import District from '../Controller/District';

MastRouter.get('/district',District.GetDistrict);
MastRouter.post('/district',District.PostDistrict);
MastRouter.put('/district',District.PutDistrict);
MastRouter.delete('/district',District.DelteDistrict);

MastRouter.get('/state',State.GetState);
MastRouter.post('/state',State.PostState);
MastRouter.put('/state',State.PutState);
MastRouter.delete('/state',State.DelteState);
export default MastRouter;