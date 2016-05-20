"use strict";

(function() {
  let details = {
    name: "Steve",
    species: "orc",
    class: "warrior",
    weapon: "warAxe"
  };

  console.log("character", Gauntlet.Character.constructCharacter(details));
}());
