"use strict";

var Gauntlet = (function(gauntlet) {
  let spellTypes = ["lightning", "fire", "water", "earth", "mysticism"];

  gauntlet.Spell = function() {};

  gauntlet.Spell.constructSpell = function(spellId) {
    let spell = new gauntlet.Spell();
    Object.assign(spell, spells[spellId]);
    return spell;
  };


  let spells = {
    sphere: {
      name: "Sphere",
      damageCalc: Math.floor(Math.random() * 10 + 10),  //TODO(adam): convert to function
      type: "random"
    }
  };

  return gauntlet;
}(Gauntlet || {}));
