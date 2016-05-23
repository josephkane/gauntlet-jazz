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
    $("#select-screen").hide();
    $("body").addClass("combat");
    $("#combat-screen").show();
  });

}());
