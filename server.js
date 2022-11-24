import dotenv from 'dotenv';
dotenv.config();

// set up for server:
import express from 'express';
import corsHeaders from './middleware/cors.js';
import playlistsRouter from './routes/playlists.js';
import usersRouter from './routes/users.js';
import { createErrorMissingPath, errorMiddleWare } from './middleware/errors.js';

// create an instance of the server:
const app = express();
const port = process.env.PORT || 8000;

//Middleware from express:
//read files from public folder
app.use(express.static('public'));
// read and sending data in the body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Older: bodyParser.json()
app.use(corsHeaders);

// Requests:
app.use('/playlists', playlistsRouter);
app.use('/users', usersRouter);

//just to check if server works when it is deployed
app.get('/test', (req, res) => {
  res.status(200).json({
    message: 'server works',
  });
});

//single wrong path
app.use('*', createErrorMissingPath);

//function that will send a response if there is an error
app.use(errorMiddleWare);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}.`);
});
