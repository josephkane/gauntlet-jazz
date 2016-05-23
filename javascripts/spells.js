"use strict";

var Gauntlet = (function(gauntlet) {
  let spellTypes = ["lightning", "fire", "water", "earth", "mysticism"];

  let getRandId = (idArray) => idArray[Math.floor(Math.random()*idArray.length)];

  gauntlet.Spell = function() {};

  gauntlet.Spell.constructSpell = function(spellId) {
    let spell = new gauntlet.Spell();
    if(spellId === "random") {
      spellId = getRandId(Object.keys(spells));
    }
    Object.assign(spell, spells[spellId]);
    return spell;
  };

  let spells = {
    sphere: {
      name: "Sphere",
      damageCalc: () => Math.floor(Math.random() * 10 + 10),
      type: "random"
    },
    firewall: {
      name: "Fire Wall",
      damageCalc: () => Math.floor(Math.random() * 12 + 14),
      type: "fire"
    }
  };

  return gauntlet;
}(Gauntlet || {}));
