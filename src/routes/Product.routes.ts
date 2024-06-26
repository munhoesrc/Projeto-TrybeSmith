// chamar no app
import { Router } from 'express';

import ProductController from '../controllers/ProductController';

const router = Router();

const controller = new ProductController();

router.get('/', controller.getAll);
router.post('/', controller.create);

export default router;