import { Router } from 'express';
import { addNewPlaylist } from '../controllers/playlists.js';
import { validParametersEntry } from '../validation/playlists.js';

const router = Router();

router.route('/').post(validParametersEntry, addNewPlaylist);

export default router;
