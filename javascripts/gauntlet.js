"use strict";

var Gauntlet = (function(gauntlet) {
  let player = null;
  let enemy = null;

  gauntlet.getPlayer = () => player;
  gauntlet.setPlayer = (playerData) =>
    player = Gauntlet.Character.constructCharacter(playerData);
  gauntlet.getEnemy = () => enemy;
  gauntlet.setEnemy = (enemyData) =>
    enemy = Gauntlet.Character.constructCharacter(enemyData);

  gauntlet.fight = function() {
    player.attack(enemy);
    enemy.attack(player);

    //TODO(adam): win/lose checking
  };

  return gauntlet;
}(Gauntlet || {}));

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

Gauntlet.fight();
Gauntlet.fight();
Gauntlet.fight();
Gauntlet.fight();

console.log("Gauntlet.getPlayer()", Gauntlet.getPlayer());
console.log("Gauntlet.getEnemy()", Gauntlet.getEnemy());
