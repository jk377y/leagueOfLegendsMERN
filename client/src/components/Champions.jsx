import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const CHAMPIONS_QUERY = gql`
	query Query {
		champions {
			id
			name
			title
			mainPic
			skins
			lore
			roles
			passiveName
			passiveImage
			passiveDescription
			spells {
				spellId
				spellName
				spellImage
				spellDescription
			}
		}
	}
`;

const ChampionGallery = () => {
	const { loading, error, data } = useQuery(CHAMPIONS_QUERY);
	const [selectedChampion, setSelectedChampion] = useState(null);

	const handleChampionClick = (champion) => {
		setSelectedChampion(champion);
	};

	const handleCloseModal = () => {
		setSelectedChampion(null);
	};

	if (loading) return <p>Loading champions...</p>;
	if (error) return <p>Error loading champions!</p>;

	return (
		<div className="gallery">
			{data.champions.map((champion) => (
				<div key={champion.id}>
					<img
						src={champion.mainPic}
						className="thumbnail"
						alt={`${champion.name} - ${champion.title}`}
						onClick={() => handleChampionClick(champion)}
						title={champion.name}
					/>
				</div>
			))}
			{selectedChampion && (
				<div className="champion-modal">
					<div className="champion-modal-content">
						<button onClick={handleCloseModal}>Close</button>
						<img
							src={selectedChampion.mainPic}
							alt={`${selectedChampion.name} - ${selectedChampion.title}`}
						/>
						<h2>{selectedChampion.name}</h2>
						<h3>{selectedChampion.title}</h3>
						<p>{selectedChampion.lore}</p>
						<ul>
							{selectedChampion.roles.map((role) => (
								<li key={role}>{role}</li>
							))}
						</ul>
						<h4>{selectedChampion.passiveName}</h4>
						<img
							src={selectedChampion.passiveImage}
							alt={selectedChampion.passiveName}
						/>
						<p>{selectedChampion.passiveDescription}</p>
						<h4>Spells</h4>
						{selectedChampion.spells.map((spell) => (
							<div key={spell.spellId}>
								<h5>{spell.spellName}</h5>
								<img
									src={spell.spellImage}
									alt={`${spell.spellName} - ${selectedChampion.name}`}
								/>
								<p>{spell.spellDescription}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ChampionGallery;
