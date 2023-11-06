import express from 'express';
const AddressRouter = express.Router();

import Address from '../Controller/Address';

AddressRouter.get('/address',Address.GetAddress);
AddressRouter.post('/address',Address.PostAddress);
AddressRouter.put('/address',Address.PutAddress);
AddressRouter.delete('/address',Address.DelteAddress);
export default AddressRouter;