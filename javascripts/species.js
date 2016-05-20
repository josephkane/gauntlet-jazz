"use strict";

var Gauntlet = (function (gauntlet) {
	gauntlet.Species = function () {

	}

	gauntlet.Species.constructSpecies = function (speciesId) {
		var species = new gauntlet.Species();
		Object.assign(species, speciesData[speciesId]);
		return species;
	}

	let speciesData = {
		human: {
			name: "human"
		},
		orc: {
			name: "orc",
		}
	};

	console.log("construct Human: ", gauntlet.Species.constructSpecies("human"));

	return gauntlet;
}(Gauntlet || {}))