const db = require("../config/connection");
const { Champion } = require("../models");
const championSeeds = require('./champion.json');

db.once("open", async () => {
	try {
		// Deleting any existing collections
		await Champion.deleteMany({});
		// Creating the collections
		await Champion.create(championSeeds);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
	console.log("========== CHAMPION SEEDING WAS SUCCESSFUL!!! ==========");
	process.exit(0);
});