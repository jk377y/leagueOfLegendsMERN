const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Spells {
		spellId: String
		spellName: String
		spellDescription: String
		spellImage: String
	}
	
	type Champion {
		id: String!
		name: String!
		title: String
		lore: String
		skins: [Int]
		mainPic: String
		passiveName: String
		passiveDescription: String
		passiveImage: String
		spells: [Spells]
		roles: [String]
	}

	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
	}

	type Auth {
		token: ID!
		user: User
	}

	input SpellsInput {
		spellId: String
		spellName: String
		spellDescription: String
		spellImage: String
	}

	input ChampionInput {
		id: String!
		name: String!
		title: String
		lore: String
		skins: [Int]
		mainPic: String
		passiveName: String
		passiveDescription: String
		passiveImage: String
		spells: [SpellsInput]
		roles: [String]
	}

	type Query {
		champion(_id: ID!): Champion
		champions: [Champion!]!
		user(_id: ID!): User
		users: [User!]!
	}

	type Mutation {
		createChampion(input: ChampionInput!): Champion!
		updateChampion(_id: ID!, input: ChampionInput!): Champion!
		deleteChampion(_id: ID!): Champion!
	}
`;

module.exports = typeDefs;
