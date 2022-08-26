const express = require("express");
const SchemaModels = require("../Models/uersSchemas");
const router = express.Router();


  //1###################### add data to database ##############################

  const adduser = async (req, res) => {
    const {name,gender,email,placeOfBirth,studyGroup} = req.body;
    try {
      const student = await SchemaModels.create({name,gender,email,placeOfBirth,studyGroup});
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  // app.use("/api/students",
  
  router.post("/", adduser);




//2############################# get single data #################################

const getsingledata = async (req, res) => {
  const {id} = req.params;
  const data = await SchemaModels.findById(id);
  res.status(200).json(data);
};
// app.use("/api/students", 

router.get("/:id", getsingledata); 





//3############################## get/Read All data #################################

const getalldata = async (req, res) => {

  const alldata = await SchemaModels.find({});
  res.status(200).json(alldata);
};
// app.use("/api/students", 


router.get("/", getalldata);





//4################################# delete data ###############################

const deletedata = async (req, res) => {
    const {id} = req.params;
    const data = await SchemaModels.findByIdAndDelete(id);
    res.status(200).json({success: "deleted"});
  };

  router.delete("/:id",  deletedata);


module.exports = router;