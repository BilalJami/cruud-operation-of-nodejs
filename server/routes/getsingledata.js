// const express = require("express");
// const SchemaModels = require("../Models/uersSchemas");

// const app = express();

// //2# get single data
// const getsingledata = async (req, res) => {
//     const {id} = req.params;
//     const data = await SchemaModels.findById(id);
//     res.status(200).json(data);
//   };
//   app.use("/api/students", router.get("/:id", getsingledata));  

// module.exports = getsingledata;