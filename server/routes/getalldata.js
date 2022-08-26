const express = require("express");
const SchemaModels = require("../Models/uersSchemas");

const app = express();

//3# get/Read All data
const getalldata = async (req, res) => {

    const alldata = await SchemaModels.find({});
    res.status(200).json(alldata);
  };
  app.use("/api/students", router.get("/", getalldata));

  
module.exports = getalldata;