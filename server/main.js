const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

app.get('/', (req, res) => {

  console.log(req.body);
  res.send(JSON.stringify({ a: 5 }));
});

app.post('/', (req, res) => {


  console.log(req.body);
  res.send(JSON.stringify({ a: 5 }));
});

app.listen(3000, () => console.log(`App is running`));
