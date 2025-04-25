import express from 'express';
import { listStores, addStore } from '../controllers/storeController.js';

const router = express.Router();

router.get('/', listStores);
router.post('/', addStore);

export default router;
