import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
