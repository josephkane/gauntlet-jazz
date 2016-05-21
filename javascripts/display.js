"use strict";

(function() {
  
  var jim = Gauntlet.getPlayer();
  var steve = Gauntlet.getEnemy();
  console.log("jim = ", jim);
  $("#player-1-name").html(`Name : ${jim.name}`);
  $("#player-1-species").html(`Species : ${jim.species.name}`);
  $("#player-1-hp").html(`HP : ${jim.health}`);
  $("#player-1-weapon").html(`Weapon : ${jim.weapon.name}`);

  $("#player-2-name").html(`Name : ${steve.name}`);
  $("#player-2-species").html(`Species : ${steve.species.name}`);
  $("#player-2-hp").html(`HP : ${steve.health}`);
  $("#player-2-weapon").html(`Weapon : ${steve.weapon.name}`);
}());

// $("player-1-name").html(details.name);