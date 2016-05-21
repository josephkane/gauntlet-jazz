"use strict";

var Gauntlet = (function(gauntlet) {
  let stillFighting = false;
  let player = null;
  let enemy = null;

  gauntlet.getPlayer = () => player;
  gauntlet.setPlayer = function(playerData) {
    player = Gauntlet.Character.constructCharacter(playerData);
    stillFighting = player && enemy;
  };
  gauntlet.getEnemy = () => enemy;
  gauntlet.setEnemy = function(enemyData) {
    enemy = Gauntlet.Character.constructCharacter(enemyData);
    stillFighting = player && enemy;
  };

  gauntlet.fight = function() {
    if(stillFighting) { stillFighting = player.attack(enemy); }
    if(stillFighting) { stillFighting = enemy.attack(player); }

    return stillFighting;
  };

  return gauntlet;
}(Gauntlet || {}));


//NOTE(adam): example combat setup
Gauntlet.setPlayer({
    name: "Jim",
    speciesId: "human",
    classId: "berserker",
    weaponId: "broadsword"
  });

Gauntlet.setEnemy({
    name: "Steve",
    speciesId: "orc",
    classId: "warrior",
    weaponId: "warAxe"
  });

while(Gauntlet.fight()) {}

console.log("Gauntlet.getPlayer()", Gauntlet.getPlayer());
console.log("Gauntlet.getEnemy()", Gauntlet.getEnemy());
