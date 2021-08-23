const express = require('express');
const htmlRoutes= require("./routes/htmlroutes")
const routerAPI = require("./routes/apiroutes")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api/notes', routerAPI)
app.use('/', htmlRoutes)


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
