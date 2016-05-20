var classes = {
  fighter: {
    healthBonus: 20,
    strengthBonus: 10
  },
  // All non-magical subclasses are set to inherit from fighter
  warrior: {
    name: "Warrior",
    healthBonus: classes.fighter.healthBonus + 25,
    strengthBonus: classes.fighter.strengthBonus + 30
  },
  valkyrie: {
    name: "Valkyrie",
    healthBonus: classes.fighter.healthBonus + 20,
    strengthBonus: classes.fighter.strengthBonus + 10
  },
  berserker: {
    name: "Berserker",
    healthBonus: classes.fighter.healthBonus + 35,
    strengthBonus: classes.fighter.strengthBonus + 20
  },
  monk: {
    name: "Monk",
    healthBonus: classes.fighter.healthBonus + 10,
    strengthBonus: classes.fighter.strengthBonus + 40
  },
  //MAGICAL CLASSES.
  mage: {
    name: "Mage",
    magical: true,
    healthBonus: -10,
    strengthBonus: -20,
    intelligenceBonus: 20
  },
  // All subclasses are set to inherit from Mage
  shaman: {
    name: "Shaman",
    magical: classes.mage.magical,
    healthBonus: classes.mage.healthBonus + 5,
    strengthBonus: classes.mage.strengthBonus - 10,
    intelligenceBonus: classes.mage.intelligenceBonus + 20
  },
  wizard: {
    name: "Wizard",
    magical: classes.mage.magical,
    healthBonus: classes.mage.healthBonus - 15,
    strengthBonus: classes.mage.strengthBonus - 25,
    intelligenceBonus: classes.mage.intelligenceBonus + 40
  },
  conjurer: {
    name: "Conjurer",
    magical: classes.mage.magical,
    // healthBonus: 0, // this isnt actually included
    strengthBonus: classes.mage.strengthBonus - 10,
    intelligenceBonus: classes.mage.intelligenceBonus + 10
  },
  sorcerer: {
    name: "Sorcerer",
    magical: classes.mage.magical,
    healthBonus: classes.mage.healthBonus - 5,
    strengthBonus: classes.mage.strengthBonus - 20,
    intelligenceBonus: classes.mage.intelligenceBonus + 30
  }
};
