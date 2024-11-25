const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const seedUser = async () => {
  try {
    // Log the DATABASE_URI to verify it's loaded
    console.log("DATABASE_URI:", process.env.DATABASE_URI);

    await mongoose.connect(process.env.DATABASE_URI);

    const username = "admin";
    const password = "Admin@123"; // Change as needed
    const roles = ["Admin"];

    // Delete existing user if exists
    const deleteResult = await User.deleteOne({ username }).exec();
    if (deleteResult.deletedCount > 0) {
      console.log("Existing user deleted");
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      password: hashedPwd,
      roles,
      active: true,
    });

    console.log("User created:", user);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Remove the automatic invocation to run manually
// seedUser();