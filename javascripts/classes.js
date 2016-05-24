"use strict";

var Gauntlet = (function(gauntlet) {
  // class constructor
  gauntlet.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;
  };

  gauntlet.PlayerClass.constructClass = function(classId) {
    var playerClass = new gauntlet.PlayerClass();
    Object.assign(playerClass, classes[classId]);
    return playerClass;
  };

  gauntlet.PlayerClass.getClassData = (classId) => classes[classId];

  gauntlet.PlayerClass.getClassList = function() {
    let list = [];
    for(let cls in classes) {
      list.push(classes[cls]);
    }
    return list;
  };



  let fighter = {
    id: "classFighter",
    name: "Fighter",
    healthBonus: 20,
    strengthBonus: 10
  };

  let mage = {
    id: "classMage",
    name: "Mage",
    magical: true,
    healthBonus: -10,
    strengthBonus: -20,
    intelligenceBonus: 20,
    allowedWeapons: ["weaponHands", "weaponDagger", "weaponSword"]
  };

  let classes = {
    // MELEE CLASSES
    classFighter: fighter,
    // All non-magical subclasses are set to inherit from fighter
    classWarrior: {
      id: "classWarrior",
      name: "Warrior",
      healthBonus: fighter.healthBonus + 25,
      strengthBonus: fighter.strengthBonus + 30,
      allowedWeapons: ["weaponHands", "weaponDagger", "weaponSword"]
    },
    classValkyrie: {
      id: "classValkyrie",
      name: "Valkyrie",
      healthBonus: fighter.healthBonus + 20,
      strengthBonus: fighter.strengthBonus + 10,
      allowedWeapons: ["weaponHands", "weaponSword"]
    },
    classBerserker: {
      id: "classBerserker",
      name: "Berserker",
      healthBonus: fighter.healthBonus + 35,
      strengthBonus: fighter.strengthBonus + 20,
      allowedWeapons: ["weaponAxe"]
    },
    classMonk: {
      id: "classMonk",
      name: "Monk",
      healthBonus: fighter.healthBonus + 10,
      strengthBonus: fighter.strengthBonus + 40,
      allowedWeapons: ["weaponHands"]
    },
    // MAGICAL CLASSES
    classMage: mage,
    // All subclasses are set to inherit from Mage
    classShaman: {
      id: "classShaman",
      name: "Shaman",
      magical: mage.magical,
      healthBonus: mage.healthBonus + 5,
      strengthBonus: mage.strengthBonus - 10,
      intelligenceBonus: mage.intelligenceBonus + 20,
      allowedWeapons: ["weaponHands", "weaponDagger", "weaponSword"]
    },
    classWizard: {
      id: "classWizard",
      name: "Wizard",
      magical: mage.magical,
      healthBonus: mage.healthBonus - 15,
      strengthBonus: mage.strengthBonus - 25,
      intelligenceBonus: mage.intelligenceBonus + 40,
      allowedWeapons: ["weaponHands", "weaponDagger"]
    },
    classConjurer: {
      id: "classConjurer",
      name: "Conjurer",
      magical: mage.magical,
      strengthBonus: mage.strengthBonus - 10,
      intelligenceBonus: mage.intelligenceBonus + 10,
      allowedWeapons: ["weaponHands", "weaponDagger"]
    },
    classSorcerer: {
      id: "classSorcerer",
      name: "Sorcerer",
      magical: mage.magical,
      healthBonus: mage.healthBonus - 5,
      strengthBonus: mage.strengthBonus - 20,
      intelligenceBonus: mage.intelligenceBonus + 30,
      allowedWeapons: ["weaponHands"]
    }
  };

  return gauntlet;
}(Gauntlet || {}));
