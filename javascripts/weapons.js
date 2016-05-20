"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.Weapon = function() {
    //NOTE(adam): shared swing function
    this.swing = function() {
      return this.damage;
    };
  };

  //NOTE(adam): this would attach to a character to give it a weapon
  gauntlet.Weapon.constructWeapon = function(weaponId) {
    //NOTE(adam): create generic weapon
    var weapon = new gauntlet.Weapon();
    //NOTE(adam): attach specific properties to weapon
    Object.assign(weapon, gauntlet.Weapon.getWeaponData(weaponId));
    return weapon;
  };

  gauntlet.Weapon.getWeaponData = function(id) {
    return weapons[id];
  };

  //NOTE(adam): weapon data by id
  let weapons = {
    bareHands: {
      name: "bare hands",
      damage: 1,
      hands: 2
    },
    dagger: {
      name: "dagger",
      damage: 4,
      hands: 1
    },
    broadsword: {
      name: "broad sword",
      damage: 14,
      hands: 2
    },
    warAxe: {
      name: "war axe",
      damage: 18,
      hands: 2
    }
  };

  return gauntlet;
}(Gauntlet || {}));
