// set up for server:
import express from 'express';
// create an instance of the server:
const app = express();

// last lines:
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}.`);
});
