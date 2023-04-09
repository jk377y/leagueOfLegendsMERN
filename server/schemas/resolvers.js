const Champion = require("../models/Champion");

const resolvers = {
	Query: {
		champion: async (parent, { id }) => {
			return await Champion.findById(id);
		},
		champions: async () => {
			return await Champion.find();
		}		
	},
	Mutation: {
		createChampion: async (parent, { input }) => {
			const champion = new Champion(input);
			await champion.save();
			return champion;
		},
		updateChampion: async (parent, { id, input }) => {
			const champion = await Champion.findByIdAndUpdate(id, input, {
				new: true,
			});
			return champion;
		},
		deleteChampion: async (parent, { id }) => {
			const champion = await Champion.findByIdAndDelete(id);
			return champion;
		},
	},
};

module.exports = resolvers;