// const express = require("express");
// const SchemaModels = require("../Models/uersSchemas");

// const app = express();

//   //1# add data to database
//   const adduser = async (req, res) => {
//     const {name,gender,email,placeOfBirth,studyGroup} = req.body;
//     try {
//       const student = await SchemaModels.create({name,gender,email,placeOfBirth,studyGroup});
//       res.status(200).json(student);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
//   app.use("/api/students", router.post("/", adduser));


// module.exports = adduser;