"use strict";

(function() {
  let details = {
    name: "Steve",
    speciesId: "orc",
    classId: "warrior",
    weaponId: "warAxe"
  };

  console.log("character", Gauntlet.Character.constructCharacter(details));
}());
