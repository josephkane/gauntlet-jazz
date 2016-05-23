"use strict";

(function() {
  
  var jim = Gauntlet.getPlayer();
  var steve = Gauntlet.getEnemy();
  console.log("jim = ", jim);
  
  $(".player-name").html(`Name : ${jim.name}`);
  $(".player-species").html(`Species : ${jim.species.name}`);
  $(".player-hp").html(`HP : ${jim.health}`);
  $(".player-weapon").html(`Weapon : ${jim.weapon.name}`);

  $(".enemy-name").html(`Name : ${steve.name}`);
  $(".enemy-species").html(`Species : ${steve.species.name}`);
  $(".enemy-hp").html(`HP : ${steve.health}`);
  $(".enemy-weapon").html(`Weapon : ${steve.weapon.name}`);
}());

// $("player-1-name").html(details.name);