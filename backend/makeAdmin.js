const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

(async () => {
  const email = "leotest@example.com";
  const user = await User.findOneAndUpdate({ email }, { isAdmin: true });
  console.log(`${email} is now admin.`);
  mongoose.disconnect();
})();
