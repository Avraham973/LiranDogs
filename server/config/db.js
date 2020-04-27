/** @format */
require("dotenv-extended").load();
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI2");

const connectDB = async () => {
  try {
    // console.log(process.env.mongoURI, process.env.MONGO);
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.log("MongoDB falid to connect.");
    console.log("====================================");
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

// export default connectDB;
module.exports = connectDB;
