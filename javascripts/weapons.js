"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.Weapon = function() {
    //NOTE(adam): shared swing function
    this.swing = function() {
      return this.damage;
    };
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

  gauntlet.getWeaponData = function(id) {
    return weapons[id];
  };

  return gauntlet;
}(Gauntlet || {}));
