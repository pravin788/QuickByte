// 
import mongoose from "mongoose";

// export const  connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://Team-7:majorProjectTeam@quickbite.kbvbroq.mongodb.net/food-del').then(()=>console.log("DB Connected"))
// }

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
// mongodb+srv://Team-7:majorProjectTeam@quickbite.kbvbroq.mongodb.net/



// const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    // mongoose.set("useNewUrlParser", true);
    // mongoose.set("useFindAndModify", false);
    // mongoose.set("useCreateIndex", true);
    const conn = await mongoose.connect('mongodb+srv://Team-7:majorProjectTeam@quickbite.kbvbroq.mongodb.net/food-del', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit();
  }
};

// module.exports = connectDB;