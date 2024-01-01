import 'dotenv/config';
import mongoose from 'mongoose';

import app from './app';

(async () => {
	await mongoose.connect(process.env.MONGO_URI);
	console.log("Database connected");

	app.listen(process.env.APP_PORT, () => {
		console.log(`${process.env.NODE_ENV} app is running on port ${process.env.APP_PORT}`);
	});
})();
