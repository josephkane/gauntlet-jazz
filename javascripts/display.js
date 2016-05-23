"use strict";

(function() {

  var jim = Gauntlet.getPlayer();
  var steve = Gauntlet.getEnemy();
  console.log("jim = ", jim);

  $(".player-name").html(` ${jim.name}`);
  $(".player-species").html(` ${jim.species.name}`);
  $(".player-hp").html(` ${jim.health}`);
  $(".player-weapon").html(` ${jim.weapon.name}`);

  $(".enemy-name").html(` ${steve.name}`);
  $(".enemy-species").html(` ${steve.species.name}`);
  $(".enemy-hp").html(` ${steve.health}`);
  $(".enemy-weapon").html(` ${steve.weapon.name}`);
}());

// $("player-1-name").html(details.name);