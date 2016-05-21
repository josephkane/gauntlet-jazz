"use strict";

var Gauntlet = (function(gauntlet) {
  let spellTypes = ["lightning", "fire", "water", "earth", "mysticism"];

  gauntlet.Spell = function() {};

  gauntlet.Spell.constructSpell = function(spellId) {
    let spell = new gauntlet.Spell();
    Object.assign(spell, spells[spellId]);
    return spell;
  }; 

  gauntlet.Spell.random = function() {
    // chose spelled based on randomly indexing into spells object.
    var spellsArray = Object.keys(spells);
    var selectedSpell = spellsArray[Math.floor(Math.random()*spellsArray.length)];
    let spell = new gauntlet.Spell();
    Object.assign(spell, spells[selectedSpell]);
    return spell;
  };


  let spells = {
    sphere: {
      name: "Sphere",
      damageCalc: Math.floor(Math.random() * 10 + 10),  //TODO(adam): convert to function
      type: "random"
    },
    firewall: {
      name: "Fire Wall",
      damageCalc: Math.floor(Math.random() * 12 + 14),  //TODO(adam): convert to function
      type: "random"
    }
  };

  return gauntlet;
}(Gauntlet || {}));


console.log("Gauntlet.Spell.random() =  ", Gauntlet.Spell.random());
// console.log("Gauntlet.Spell.constructSpell(sphere)", Gauntlet.Spell.constructSpell("sphere"));
