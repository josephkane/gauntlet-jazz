// "use strict";
// /*
//   TODO: Modularize this code with IIFE or Browserify
//  */
// var Gauntlet = Gauntlet || {};
// Gauntlet.GuildHall = {};

// /*
//   Base function for a player, or enemy, class (profession)
//  */
// Gauntlet.GuildHall.PlayerClass = function() {
//   this.name = "Beggar";
//   this.healthBonus = 0;
//   this.strengthBonus = 0;
//   this.intelligenceBonus = 0;
//   this.magical = false;

//   this.toString = function() {
//     return this.name;
//   };
// };

// /*
//     FIGHTER CLASSES
//       - Warrior
//       - Valkyrie
//       - Berserker
//       - Monk
//  */
// Gauntlet.GuildHall.Fighter = function() {
//   this.healthBonus = 20;
//   this.strengthBonus = 10;
// };
// Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


// Gauntlet.GuildHall.Warrior = function() {
//   this.name = "Warrior";
//   this.healthBonus = this.healthBonus + 25;
//   this.strengthBonus = this.strengthBonus + 30;
// };
// Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Valkyrie = function() {
//   this.name = "Valkyrie";
//   this.healthBonus = this.healthBonus + 20;
//   this.strengthBonus = this.strengthBonus + 10;
// };
// Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Berserker = function() {
//   this.name = "Berserker";
//   this.healthBonus = this.healthBonus + 35;
//   this.strengthBonus = this.strengthBonus + 20;
// };
// Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Monk = function() {
//   this.name = "Monk";
//   this.healthBonus = this.healthBonus + 10;
//   this.strengthBonus = this.strengthBonus + 40;
// };
// Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();




// /*
//     MAGICAL CLASSES
//       - Shaman
//       - Wizard
//       - Conujurer
//       - Sorcerer
//  */
// Gauntlet.GuildHall.Mage = function() {
//   this.name = "Mage";
//   this.magical = true;
//   this.healthBonus = this.healthBonus - 10;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


// Gauntlet.GuildHall.Shaman = function() {
//   this.name = "Shaman";
//   this.healthBonus = this.healthBonus + 5;
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


// Gauntlet.GuildHall.Wizard = function() {
//   this.name = "Wizard";
//   this.healthBonus = this.healthBonus - 15;
//   this.strengthBonus = this.strengthBonus - 25;
//   this.intelligenceBonus = this.intelligenceBonus + 40;
// };
// Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


// var classes = {
//   fighter: {
//     healthBonus: 20,
//     strengthBonus: 10
//   },
//   warrior: {
//     name: "Warrior",
//     healthBonus: classes.fighter.healthBonus + 25,
//     strengthBonus: classes.fighter.strengthBonus + 30
//   },
//   valkyrie: {
//     name: "Valkyrie",
//     healthBonus: classes.fighter.healthBonus + 20,
//     strengthBonus: classes.fighter.strengthBonus + 10
//   },
//   berserker: {
//     name: "Berserker",
//     healthBonus: classes.fighter.healthBonus + 35,
//     strengthBonus: classes.fighter.strengthBonus + 20
//   },
//   monk: {
//     name: "Monk",
//     healthBonus: classes.fighter.healthBonus + 10,
//     strengthBonus: classes.fighter.strengthBonus + 40
//   },
//   //MAGICAL CLASSES.
//   mage: {
//     name: "Mage",
//     magical: true,
//     healthBonus: -10,
//     strengthBonus: -20,
//     intelligenceBonus: 20
//   },
//   // All subclasses are set to inherit from Mage
//   shaman: {
//     name: "Shaman",
//     magical: classes.mage.magical,
//     healthBonus: classes.mage.healthBonus + 5,
//     strengthBonus: classes.mage.strengthBonus - 10,
//     intelligenceBonus: classes.mage.intelligenceBonus + 20
//   },
//   wizard: {
//     name: "Wizard",
//     magical: classes.mage.magical,
//     healthBonus: classes.mage.healthBonus - 15,
//     strengthBonus: classes.mage.strengthBonus - 25,
//     intelligenceBonus: classes.mage.intelligenceBonus + 40
//   },
//   conjurer: {
//     name: "Conjurer",
//     magical: classes.mage.magical,
//     // healthBonus: 0, // this isnt actually included but it
//     strengthBonus: classes.mage.strengthBonus - 25,
//     intelligenceBonus: classes.mage.intelligenceBonus + 40

// };

// Gauntlet.GuildHall.Conjurer = function() {
//   this.name = "Conjurer";
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 10;
// };
// Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


// Gauntlet.GuildHall.Sorcerer = function() {
//   this.name = "Sorcerer";
//   this.healthBonus = this.healthBonus - 5;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 30;
// };
// Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


// /*
//     STEALTH CLASSES
//       - Thief
//       - Ninja
//       - Assassin
//  */

