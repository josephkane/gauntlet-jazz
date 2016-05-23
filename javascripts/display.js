"use strict";

(function() {

  $(document).ready(function () {
    $("#combat-screen").hide()
  });

  $("#fight-button").click(function () {
    $("#select-screen").hide();
    $("#combat-screen").show();
  });

  $("#attack-button").click(function () {
    Gauntlet.fight();
    updateStats();
  });

  var updateStats = function () {

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

  }

}());

// $("player-1-name").html(details.name);