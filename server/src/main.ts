import express from 'express';
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.listen(3000, () => console.log(`App is running, localhost:3000`));
