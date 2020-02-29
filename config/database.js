const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = dbConnection;