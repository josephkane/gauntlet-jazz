"use strict";

(function() {

  function updateStats() {
    let player = Gauntlet.getPlayer();
    let enemy = Gauntlet.getEnemy();

    $(".player-name").html(` ${player.name}`);
    $(".player-species").html(` ${player.species.name}`);
    $(".player-hp").html(` ${player.health}`);
    $(".player-weapon").html(` ${player.weapon.name}`);

    $(".enemy-name").html(` ${enemy.name}`);
    $(".enemy-species").html(` ${enemy.species.name}`);
    $(".enemy-hp").html(` ${enemy.health}`);
    $(".enemy-weapon").html(` ${enemy.weapon.name}`);
  }

  $("#attack-button").click(function() {
    Gauntlet.fight();
    updateStats();
  });

  let speciesList = Gauntlet.Species.getSpeciesList();
  let classList = Gauntlet.PlayerClass.getClassList();
  let weaponList = Gauntlet.Weapon.getWeaponList();

  let $nameInput = $("#name-input");
  let $speciesSelect = $("#species-select");
  let $classSelect = $("#class-select");
  let $weaponSelect = $("#weapon-select");

  speciesList.forEach(e => $speciesSelect.append(`<option value=${e.id}>${e.name}</option>`));
  classList.forEach(e => $classSelect.append(`<option value=${e.id}>${e.name}</option>`));
  weaponList.forEach(e => $weaponSelect.append(`<option value=${e.id}>${e.name}</option>`));

  $("#fight-button").click(function() {
    Gauntlet.setPlayer({
      name: $nameInput.val(),
      speciesId: $speciesSelect.val(),
      classId: $classSelect.val(),
      weaponId: $weaponSelect.val()
    });

    //TODO(adam): make random
    Gauntlet.setEnemy({
      name: "Steve",
      speciesId: "orc",
      classId: "warrior",
      weaponId: "warAxe"
    });

    $("#select-screen").hide();
    $("body").addClass("combat");
    $("#combat-screen").show();
    updateStats();
  });

}());
