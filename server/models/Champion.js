const { Schema, model, SchemaType } = require("mongoose");

const spellSchema = new Schema({
	spellId: {
		type: String,
	},
	spellName: {
		type: String,
	},
	spellDescription: {
		type: String,
	},
	spellImage: {
		type: String,
	},
});

const ChampionSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	title: {
		type: String,
	},
	lore: {
		type: String,
	},
	skins: {
		type: [Number],
	},
	mainPic: {
		type: String,
	},
	passiveName: {
		type: String,
	},
	passiveDescription: {
		type: String,
	},
	passiveImage: {
		type: String,
	},
	spells: {
		type: [spellSchema],
	},
	roles: {
		type: [String],
	},
});

const Champion = model("Champion", ChampionSchema);
module.exports = Champion;
