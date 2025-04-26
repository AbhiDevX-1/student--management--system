const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from the environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Ensure using the new parser
      useUnifiedTopology: true, // Ensure unified topology for better connection handling
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there's an error, log it and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with a non-zero exit code to indicate failure
  }
};

module.exports = connectDB;
