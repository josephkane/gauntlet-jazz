"use strict";

var Gauntlet = (function(gauntlet) {
  //NOTE(adam): this would attach to a character to give it a weapon
  gauntlet.constructWeapon = function(weaponId) {
    //NOTE(adam): create generic weapon
    var weapon = new gauntlet.Weapon();
    //NOTE(adam): attach specific properties to weapon
    Object.assign(weapon, gauntlet.getWeaponData(weaponId));
    return weapon;
  };

  return gauntlet;
}(Gauntlet || {}));

console.log("Gauntlet.constructWeapon(warAxe)", Gauntlet.constructWeapon("warAxe"));
