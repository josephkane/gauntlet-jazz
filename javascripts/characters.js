"use strict";

var Gauntlet = (function(gauntlet) {

  gauntlet.Character = function(name) {
    this.name = name;
    this.health = 100;
  };

  gauntlet.Character.prototype.isAlive = function() {
    return this.health > 0;
  };

  gauntlet.Character.prototype.attack = function(enemy) {
    let weapDamage = this.weapon.swing()
    enemy.health -= weapDamage;
    console.log("Attack: ", `${this.name} attacks ${enemy.name} with ${this.weapon.name} for ${weapDamage} damage.`);
    if(!enemy.isAlive()) {
      console.log("Victory:", `${enemy.name} is defeated!`);
    }
    return enemy.isAlive();
  };

  gauntlet.Character.constructCharacter = function(details) {
    let character = new gauntlet.Character(details.name);

    character.species = gauntlet.Species.constructSpecies(details.speciesId);
    character.class = gauntlet.PlayerClass.constructClass(details.classId);
    character.weapon = gauntlet.Weapon.constructWeapon(details.weaponId);

    character.health += character.class.healthBonus;

    return character;
  };

  gauntlet.Character.randomCharacter = function(name) {
    let randomName = getRandElem(name);
    let randomSpecies = getRandElem(gauntlet.Species.getSpeciesList());
    let allowedClasses = Gauntlet.Species.getSpeciesList().allowedClasses;
    if(!allowedClasses) {
      allowedClasses = Gauntlet.PlayerClass.getClassList();
    };
    let randomClass = getRandElem(allowedClasses);
    let allowedWeapons = Gauntlet.PlayerClass.getClassList().allowedWeapons;
    if(!allowedWeapons) {
      allowedWeapons = Gauntlet.Weapon.getWeaponList();
    };
    let randomWeapon = getRandElem(allowedWeapons)
    console.log(randomWeapon);
  };

  return gauntlet;
}(Gauntlet || {}));
