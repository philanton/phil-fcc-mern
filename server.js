const express = require('express');
const routes = require('./routes');
require('./models');
const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static('client/build'));

app.use(routes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
