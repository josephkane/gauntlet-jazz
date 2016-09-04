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
    if(stillFighting) {
      let result = player.attack(enemy);
      stillFighting = result.enemyAlive;
      gauntlet.View.playerAttack(result);
    }
    if(stillFighting) {
      let result = enemy.attack(player);
    	stillFighting = result.enemyAlive;
    	gauntlet.View.enemyAttack(result);
    }

    return stillFighting;
  };

  return gauntlet;
}(Gauntlet || {}));

//NOTE(adam): global function to get random element from array
let getRandElem = (idArray) => idArray[Math.floor(Math.random()*idArray.length)];
