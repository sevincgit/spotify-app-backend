import { Router } from 'express';
import { addNewUser } from '../controllers/users.js';
import { validUser } from '../validation/users.js';

const router = Router();

router.route('/').post(validUser, addNewUser);

export default router;
