/* globals getRandElem */
"use strict";

var Gauntlet = (function(gauntlet) {
  let spellTypes = ["lightning", "fire", "water", "earth", "mysticism"];

  gauntlet.Spell = function() {};

  gauntlet.Spell.constructSpell = function(spellId) {
    let spell = new gauntlet.Spell();
    if(spellId === "random") {
      spellId = getRandElem(Object.keys(spells));
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
