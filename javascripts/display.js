"use strict";

(function() {
  let $nameInput = $("#name-input");
  let $speciesSelect = $("#species-select");
  let $classSelect = $("#class-select");
  let $weaponSelect = $("#weapon-select");
  let $fightButton = $("#fight-button");
  let $randomButton = $("#random-button");
  let randomNameArray = ["Madonna", "Bullwinkle", "Lil' Sebastian", "Dale Earnhardt (RIP)", "Barbara Streisand"]
  let enemyNameArray = ["Ryan 'Kill You With Kindness' Tanay", "Scott 'I'll Always Know More Than You' Humphries", "Greg 'Of Course I've Got Weed' Korte"];

  let speciesList = Gauntlet.Species.getSpeciesList();
  let classList = Gauntlet.PlayerClass.getClassList();
  let weaponList = Gauntlet.Weapon.getWeaponList();

  function updateStats() {
    let player = Gauntlet.getPlayer();
    let enemy = Gauntlet.getEnemy();

    $(".player-name").html(` ${player.name}`);
    $(".player-hp").html(` ${player.health}`);
    $(".player-species").html(` ${player.species.name}`);
    $(".player-class").html(` ${player.class.name}`);
    $(".player-weapon").html(` ${player.weapon.name}`);

    $(".enemy-name").html(` ${enemy.name}`);
    $(".enemy-hp").html(` ${enemy.health}`);
    $(".enemy-species").html(` ${enemy.species.name}`);
    $(".enemy-class").html(` ${enemy.class.name}`);
    $(".enemy-weapon").html(` ${enemy.weapon.name}`);
  }

  $("#attack-button").click(function() {
    Gauntlet.fight();
    updateStats();
  });

  $speciesSelect.html(`<option disabled selected value></option>`);
  speciesList.forEach(e => $speciesSelect.append(`<option value=${e.id}>${e.name}</option>`));

  function populateClasses(species) {
    let allowed = Gauntlet.Species.getSpeciesData(species).allowedClasses;
    if(!allowed) {
      allowed = classList;
    }
    $classSelect.html(`<option disabled selected value></option>`);
    allowed.forEach(e => $classSelect.append(`<option value=${e.id}>${e.name}</option>`));
  }

  function populateWeapons(playerClass) {
    let allowed = Gauntlet.PlayerClass.getClassData(playerClass).allowedWeapons;
    if(!allowed) {
      allowed = weaponList;
    }
    $weaponSelect.html(`<option disabled selected value></option>`);
    allowed.forEach(e => $weaponSelect.append(`<option value=${e.id}>${e.name}</option>`));
  }

  $nameInput.keyup(function(e) {
    $fightButton[0].disabled = (e.target.value === "" || $weaponSelect[0].value === "");
  });

  function switchScreens () {
    Gauntlet.View.setPlayer();
    Gauntlet.View.setEnemy();

    $("#select-screen").hide();
    $("body").addClass("combat");
    $("#combat-screen").show();
    updateStats();
  }

  $speciesSelect.change(function(e) {
    populateClasses(e.target.value);
    $weaponSelect.html(`<option disabled selected value></option>`);
    $classSelect[0].disabled = false;
    $classSelect.selectedIndex = -1;
    $weaponSelect[0].disabled = true;
    $weaponSelect.selectedIndex = -1;
    $fightButton[0].disabled = true;
  });

  $classSelect.change(function(e) {
    populateWeapons(e.target.value);
    $weaponSelect[0].disabled = false;
    $weaponSelect.selectedIndex = -1;
    $fightButton[0].disabled = true;
  });

  $weaponSelect.change(function() {
    $fightButton[0].disabled = ($nameInput[0].value === "");
  });

  $randomButton.click(function () {
    var randomPlayer = Gauntlet.Character.randomCharacter(randomNameArray);
    var randomEnemy = Gauntlet.Character.randomCharacter(enemyNameArray);
    Gauntlet.setPlayer(randomPlayer);
    Gauntlet.setEnemy(randomEnemy);
    switchScreens();
  });

  $fightButton.click(function() {
    Gauntlet.setPlayer({
      name: $nameInput.val(),
      speciesId: $speciesSelect.val(),
      classId: $classSelect.val(),
      weaponId: $weaponSelect.val()
    });

    // Gauntlet.setEnemy({
    //   name: "Steve",
    //   speciesId: "orc",
    //   classId: "warrior",
    //   weaponId: "warAxe"
    // });
    Gauntlet.setEnemy(Gauntlet.Character.randomCharacter(enemyNameArray));
    switchScreens();
  });

  $nameInput.focus();

}());
