import { Router } from 'express';
import { addNewPlaylist, getPlaylistEntry} from '../controllers/playlists.js';
import { validParametersEntry, getPlaylistEntry } from '../validation/playlists.js';

const router = Router();

router.route('/').post(validParametersEntry, addNewPlaylist);

router.route('/:id').get(validPathPlaylistId, getPlaylistEntry)

export default router;
