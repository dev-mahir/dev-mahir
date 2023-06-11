import mongoose from "mongoose";

const connectDB = async () => {
	(await mongoose.connect(process.env.MONGO_URL)).then((res) =>
		console.log("Databse connected")
	);
};


export default connectDB;