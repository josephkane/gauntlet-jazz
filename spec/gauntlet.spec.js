describe("Gauntlet", function() {
  it("should be defined", function() {
    expect(Gauntlet).toBeDefined();
  });

  xdescribe("Gauntlet.fight", function() {
    it("should exist", function() {
      expect(Gauntlet.fight).toBeDefined();
    });

    xit("should perform a round of combat", function() {
      expect(Gauntlet.fight);
        //result of combat
    });
  });

  xdescribe("Gauntlet.constructSpecies", function() {
    it("should exist", function() {
      expect(Gauntlet.constrctSpecies).toBeDefined();
    });

    xit("should build a species", function() {
      expect(Gauntlet.constructSpecies("orc"))
        .toEqual({});
    });
  });

  xdescribe("Gauntlet.constructClass", function() {
    it("should exist", function() {
      expect(Gauntlet.constrctClass).toBeDefined();
    });

    xit("should build a class", function() {
      expect(Gauntlet.constructClass("warrior"))
        .toEqual({});
    });
  });

  xdescribe("Gauntlet.constructWeapon", function() {
    it("should exist", function() {
      expect(Gauntlet.constrctWeapon).toBeDefined();
    });

    xit("should build a weapon", function() {
      expect(Gauntlet.constructWeapon("axe"))
        .toEqual({});
    });
  });

  xdescribe("Gauntlet.Species", function() {
    it("should exist", function() {
      expect(Gauntlet.Species).toBeDefined();
    });
  });

  xdescribe("Gauntlet.Class", function() {
    it("should exist", function() {
      expect(Gauntlet.Class).toBeDefined();
    });
  });

  xdescribe("Gauntlet.Weapon", function() {
    it("should exist", function() {
      expect(Gauntlet.Weapon).toBeDefined();
    });
  });

  xdescribe("Gauntlet.Character", function() {
    it("should exist", function() {
      expect(Gaunltet.Character).toBeDefined();
    });

    xdescribe("createCharacter", function() {
      it("should exist", function() {
        expect(Gauntlet.Character.createCharacter).toBeDefined();
      });

      xit("should construct a character", function() {
        expect(Gauntlet.Character.createCharacter("orc", "warrior", "axe"))
          .toEqual({species: {}, class: {}, weapon: {}});
      });
    });

    xdescribe("attack", function() {
      it("should exist", function() {
        expect(Gauntlet.Character.attack).toBeDefined();
      });

      spyOn(opponent, "hp?");

      xit("should damage enemy", function() {
        expect(Gauntlet.Character.attack(opponent));
          //check object properties
      });
    });
  });
});
