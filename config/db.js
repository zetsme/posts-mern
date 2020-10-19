//
const mongoose = require('mongoose');
//
const dbConnect = async () => {
  try {
    const mongoConnection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      `Connected to DB ${mongoConnection.connection.host}`.blue.underline
    );
  } catch (error) {
    console.log(`Error ${error.message}`.red);
    process.exit(1);
  }
};
module.exports = dbConnect;
