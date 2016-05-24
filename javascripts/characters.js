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
    let weapDamage = this.weapon.swing();
    enemy.health -= weapDamage;
    console.log("Attack: ", `${this.name} attacks ${enemy.name} with ${this.weapon.name} for ${weapDamage} damage.`);
    $("#comments").html(`${this.name} attacks ${enemy.name} with ${this.weapon.name} for ${weapDamage} damage.`);
    if(!enemy.isAlive()) {
      console.log("Victory:", `${enemy.name} is defeated!`);
      $("#comments").html(`${enemy.name} is defeated!`);
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
    let randomSpecies = getRandElem(gauntlet.Species.getSpeciesList());

    let allowedClasses = randomSpecies.allowedClasses;
    if(!allowedClasses) {
      allowedClasses = gauntlet.PlayerClass.getClassList().map(e => e.id);
    }
    let randomClass = gauntlet.PlayerClass.getClassData(getRandElem(allowedClasses));

    let allowedWeapons = randomClass.allowedWeapons;
    if(!allowedWeapons) {
      allowedWeapons = gauntlet.Weapon.getWeaponList().map(e => e.id);
    }
    let randomWeapon = gauntlet.Weapon.getWeaponData(getRandElem(allowedWeapons));

    let randomCharacter = {
      name: name,
      speciesId: randomSpecies.id,
      classId: randomClass.id,
      weaponId: randomWeapon.id
    };
    return randomCharacter;
  };

  return gauntlet;
}(Gauntlet || {}));
