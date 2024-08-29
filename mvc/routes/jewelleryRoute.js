import express from 'express';
import { createJewellery, getJewelleryById, getAllJewellery, updateJewelleryById , deleteJewelleryById, getAllJewelleryData } from '../controllers/jewelleryController.js';

const router = express.Router();

router.post('/jewellery', createJewellery);
router.get('/jewellery/:id', getJewelleryById);
router.get('/jewellery', getAllJewellery);
router.get('/allJewellerys', getAllJewelleryData);
router.put('/jewellery/:id', updateJewelleryById);
router.delete('/jewellery/:id', deleteJewelleryById);
export default router;
