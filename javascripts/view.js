"use strict";

var Gauntlet = (function(gauntlet) {
  gauntlet.View = {};

  let canvas = $("#field")[0];
  let ctx = canvas.getContext("2d");
  let animations = [];

  let $comments = $("#comments");
  let $playerStats = $(".player");
  let $enemyStats = $(".enemy");

  let player = null;
  let enemy = null;

  let playerImg = null;
  let enemyImg = null;

  gauntlet.View.setPlayer = function() {
    player = gauntlet.getPlayer();
    playerImg = $("#" + player.class.id)[0];
    if(!playerImg) {
      playerImg = $("#" + player.species.id)[0];
    }
  };

  gauntlet.View.setEnemy = function() {
    enemy = gauntlet.getEnemy();
    enemyImg = $("#" + enemy.class.id)[0];
    if(!enemyImg) {
      enemyImg = $("#" + enemy.species.id)[0];
    }
  };

  let playerCoord = {x: 10, y: 10};
  let enemyCoord = {x: canvas.width - 10, y: 10};
  let size = {w: 200, h: 200};

  let playerAttacking = false;
  let enemyAttacking = false;

  function setComments(result) {
    $comments.html(`${result.name} hits ${result.enemy} with ${result.weapon} for ${result.weapDamage} damage.`);
  }

  function draw() {
    if(!(player && enemy && playerImg && enemyImg)) { return; }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(245, 245, 245, .7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(playerImg, playerCoord.x, playerCoord.y, size.w, size.h);

    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(enemyImg, -enemyCoord.x, enemyCoord.y, size.w, size.h);
    ctx.restore();

    if(animations.length > 0) {
      playerAttacking = animations[0].player;
      enemyAttacking = animations[0].enemy;
    }

    if(playerAttacking) {
      playerCoord.x += 10;

      if(playerCoord.x >= 650) {
        playerCoord.x = 10;
        playerAttacking = false;
        setComments(animations[0]);
        animations.shift();   //NOTE(adam): 0 element was player attacking

        $enemyStats.addClass("hit");
        setTimeout(() => $enemyStats.removeClass("hit"), 750);
      }
    }

    if(enemyAttacking) {
      enemyCoord.x -= 10;

      if(enemyCoord.x <= 250) {
        enemyCoord.x = canvas.width - 10;
        enemyAttacking = false;
        setComments(animations[0]);
        animations.shift();   //NOTE(adam): 0 element was enemy attacking

        $playerStats.addClass("hit");
        setTimeout(() => $playerStats.removeClass("hit"), 750);
      }
    }
  }

  setInterval(draw, 10);

  gauntlet.View.playerAttack = (result) =>
    animations.push(Object.assign(result, {player: true, enemy: false}));
  gauntlet.View.enemyAttack = (result) =>
    animations.push(Object.assign(result, {player: false, enemy: true}));

  return gauntlet;
}(Gauntlet || {}));
