import { check } from 'express-validator';

export const validParametersEntry = [
  check('id').not().isEmpty().isAscii(),
  check('mintempo').not().isEmpty().isNumeric(),
  check('maxtempo').not().isEmpty().isNumeric(),
  check('minpopularity').not().isEmpty().isNumeric(),
  check('maxpopularity').not().isEmpty().isNumeric(),
  check('minenergy').not().isEmpty().isNumeric(),
  check('maxenergy').not().isEmpty().isNumeric(),
  check('mindanceability').not().isEmpty().isNumeric(),
  check('maxdanceability').not().isEmpty().isNumeric(),
  check('seed_genres').not().isEmpty().withMessage('Please select a genre').isAscii(),
  check('userid').not().isEmpty().isAscii(),
];
