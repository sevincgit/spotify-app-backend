import { Router } from 'express';
import { addNewPlaylist } from '../controllers/playlists';

const router = Router();

router.route('/').post(addNewPlaylist)

export default router;