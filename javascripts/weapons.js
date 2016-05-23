"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.Weapon = function() {
    //NOTE(adam): shared swing function
    this.swing = function() {
      return this.damage - this.vary + Math.floor(Math.random() * (this.vary * 2 + 1));
    };
  };

  //NOTE(adam): this would attach to a character to give it a weapon
  gauntlet.Weapon.constructWeapon = function(weaponId) {
    //NOTE(adam): create generic weapon
    var weapon = new gauntlet.Weapon();
    //NOTE(adam): attach specific properties to weapon
    Object.assign(weapon, weapons[weaponId]);
    return weapon;
  };

  gauntlet.Weapon.getWeaponData = (weaponId) => weapons[weaponId];

  gauntlet.Weapon.getWeaponList = function() {
    let list = [];
    for(let weap in weapons) {
      list.push({id: weap, name: weapons[weap].name});
    }
    return list;
  };


  //NOTE(adam): weapon data by id
  let weapons = {
    bareHands: {
      name: "bare hands",
      damage: 1,
      vary: 1,
      hands: 2
    },
    dagger: {
      name: "dagger",
      damage: 4,
      vary: 1,
      hands: 1
    },
    broadsword: {
      name: "broad sword",
      damage: 14,
      vary: 2,
      hands: 2
    },
    warAxe: {
      name: "war axe",
      damage: 18,
      vary: 3,
      hands: 2
    }
  };

  return gauntlet;
}(Gauntlet || {}));
