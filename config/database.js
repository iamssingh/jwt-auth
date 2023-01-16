const mongoose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = () =>{
    mongoose.connect(MONGO_URI,{
        // newUrlParser:true,
        // newUnifiedTopology:true,
        // useCreateIndex:true,
        // useFindAndModify:true,
    })
    .then(()=>{
        console.log("Database connected.")
    })
    .catch((err)=>{
        console.log("something went wrong while connecting to mongodb.");
        console.log("err", err);
        process.exit(0)
    });
  
}

