import express from 'express';
import bodyParser from 'body-parser';

const port = 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});