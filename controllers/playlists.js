import { db } from '../database/setup.js';
import { validationResult } from 'express-validator';

export const addNewPlaylist = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    });
  }
  let newPlaylist = req.body;
  console.log('addNewPlaylist: newPlaylist in rq body', newPlaylist);
  //   let newPlaylistId = req.body.id
  try {
    let newPlaylistInDB = await db.one(
      'INSERT INTO playlists VALUES(${id}, ${mintempo}, ${maxtempo}, ${minpopularity}, ${maxpopularity}, ${minenergy}, ${maxenergy}, ${mindanceability}, ${maxdanceability}, ${seed_genres}, ${userid}) RETURNING *',
      newPlaylist
    );

    res.status(201).json({
      success: true,
      message: 'New playlist added',
      data: newPlaylistInDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
};

export const getPlaylistEntry = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      errors: validationErrors.array(),
    })
  }
  let newPlaylist = req.body;
  let existingPlaylistInDb = await db.any('SELECT * FROM playlists WHERE id = $1', newPlaylist.id)
  console.log('existing playlist from db', existingPlaylistInDb);
    if (existingPlaylistInDb.length > 0) {
    return res.status(200).json({
      message: 'Playlist already exists.',
      data: existingPlaylistInDb,
    });
  }
  try{
  let playlistId = req.params.id;
  let playlistDataFromDB = await db.one('SELECT * FROM playlists WHERE id = $1', playlistId)
  res.status(200).json({
  message:"playlist was found!",
  success:true,
  data: playlistDataFromDB
    })
  }catch(error){
    console.log(error);
    res.status(500).json({
      success: false,
      errors: error.message,
    });
  }
}