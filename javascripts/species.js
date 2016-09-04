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
      list.push(speciesData[spec]);
    }
    return list;
  };


	let speciesData = {
		speciesHuman: {
      id: "speciesHuman",
			name: "Human",
      allowedClasses: ["classFighter", "classWarrior", "classWizard", "classMonk"]
    },
    speciesOrc: {
      id: "speciesOrc",
      name: "Orc",
      allowedClasses: ["classFighter", "classBerserker"]
		}
	};

	return gauntlet;
}(Gauntlet || {}));
