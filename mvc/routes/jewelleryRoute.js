import express from 'express';
import { createJewellery, getJewelleryById, getAllJewellery, updateJewelleryById , deleteJewelleryById } from '../controllers/jewelleryController.js';

const router = express.Router();

router.post('/jewellery', createJewellery);
router.get('/jewellery/:id', getJewelleryById);
router.get('/jewellery', getAllJewellery);
router.put('/jewellery/:id', updateJewelleryById);
router.delete('/jewellery/:id', deleteJewelleryById);
export default router;
