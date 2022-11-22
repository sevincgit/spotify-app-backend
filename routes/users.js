import { Router } from 'express';
import { addNewUser } from '../controllers/users.js';

const router = Router();

router.route('/').post(addNewUser);

export default router;
