import { check } from 'express-validator';

export const validUser = [check('id').not().isEmpty().isAscii(), check('username').not().isEmpty().matches(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s\.\,\--]+$/)];
