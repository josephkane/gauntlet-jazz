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
      list.push(weapons[weap]);
    }
    return list;
  };


  //NOTE(adam): weapon data by id
  let weapons = {
    weaponHands: {
      id: "weaponHands",
      name: "Bare Hands",
      damage: 1,
      vary: 1,
      hands: 2
    },
    weaponDagger: {
      id: "weaponDagger",
      name: "Dagger",
      damage: 4,
      vary: 1,
      hands: 1
    },
    weaponSword: {
      id: "weaponSword",
      name: "Broad Sword",
      damage: 14,
      vary: 2,
      hands: 2
    },
    weaponAxe: {
      id: "weaponAxe",
      name: "War Axe",
      damage: 18,
      vary: 3,
      hands: 2
    }
  };

  return gauntlet;
}(Gauntlet || {}));
