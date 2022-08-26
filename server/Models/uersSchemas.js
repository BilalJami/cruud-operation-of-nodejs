const mongoose = require("mongoose");

const mongos = mongoose;

const userSchemas = new mongos.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:false
    },
    email:{
      type:String,
      required:true,
      trim:false,
      unique:true
    },
    placeOfBirth:{
      type:String,
      required:true,
      trim:true  
    },
    studyGroup:{
      type:String,
      required:true,
      trim:true  
    }
});

const SchemaModels = mongos.model("studentRelation", userSchemas);

module.exports = SchemaModels;