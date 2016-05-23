"use strict";

var Gauntlet = (function (gauntlet) {
	gauntlet.Species = function () {};

	gauntlet.Species.constructSpecies = function (speciesId) {
		var species = new gauntlet.Species();
		Object.assign(species, speciesData[speciesId]);
		return species;
	};

  gauntlet.Species.getSpeciesData = (speciesId) => speciesData[speciesId];

  gauntlet.Species.getSpeciesList = function() {
    let list = [];
    for(let spec in speciesData) {
      list.push({id: spec, name: speciesData[spec].name});
    }
    return list;
  };


	let speciesData = {
		human: {
			name: "human"
		},
		orc: {
			name: "orc",
		}
	};

	return gauntlet;
}(Gauntlet || {}));
