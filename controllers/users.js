import { db } from '../database/setup.js';
import { validationResult } from 'express-validator';

export const addNewUser = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    });
  }
  let newUser = req.body;
  let existingUserInDb = await db.any('SELECT * FROM users WHERE id = $1', newUser.id);
  console.log('existing user from db', existingUserInDb);
  if (existingUserInDb.length > 0) {
    return res.status(200).json({
      message: 'User already exists.',
      data: existingUserInDb,
    });
  }

  try {
    let newUserInDB = await db.one('INSERT INTO users VALUES(${id}, ${username}) RETURNING *', newUser);

    res.status(201).json({
      success: true,
      message: 'New user added',
      data: newUserInDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
};
