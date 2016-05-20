"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.Character = function(name) {
    this.name = name;
  };

  gauntlet.Character.constructCharacter = function(details) {
    let character = new gauntlet.Character(details.name);

    // character.species = gauntlet.constructSpecies(details.speciesId);
    // character.class = gauntlet.constructClass(details.classId);
    character.weapon = gauntlet.Weapon.constructWeapon(details.weaponId);

    return character;
  };

  return gauntlet;
}(Gauntlet || {}));
