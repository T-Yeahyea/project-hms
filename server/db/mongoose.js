var mongoose = require ('mongoose');
require("dotenv").config()

mongoose.Promise = global.Promise;

//change the database with yours
mongoose
  .connect(
    process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASS),
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in connecting to DataBase", err.message);
  });

module.exports = {mongoose};
