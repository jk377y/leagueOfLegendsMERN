const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb+srv://admin:adminpasswordadmin@lol-mern.j6gz3oo.mongodb.net/lol_mern",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;