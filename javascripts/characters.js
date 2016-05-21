"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.Character = function(name) {
    this.name = name;
    this.health = 100;
  };

  gauntlet.Character.prototype.attack = function(enemy) {
    enemy.health -= this.weapon.damage;
    console.log("Attack: ", `${this.name} attacks ${enemy.name} with ${this.weapon.name} for ${this.weapon.damage} damage.`);
  };

  gauntlet.Character.constructCharacter = function(details) {
    let character = new gauntlet.Character(details.name);

    character.species = gauntlet.Species.constructSpecies(details.speciesId);
    character.class = gauntlet.PlayerClass.constructClass(details.classId);
    character.weapon = gauntlet.Weapon.constructWeapon(details.weaponId);

    character.health += character.class.healthBonus;

    return character;
  };

  return gauntlet;
}(Gauntlet || {}));
