const express = require("express");
const mongos = require("mongoose");
require("dotenv").config();
const router = express.Router();

//const {addUser} = require("./routes/postdata")
//const {getSingleData} = require("./routes/getsingledata")
//const {getAllData} = require("./routes/getalldata")
const deleteRoute = require("./routes/deletedata")

const app = express();

app.use(express.json());



// database connection
mongos
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database connected to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use('/api/students',deleteRoute)
// addUser;
// getSingleData;
// getAllData;
// deleteData;