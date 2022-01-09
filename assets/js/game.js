var playerName = window.prompt("What is your Robot' name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (min - max + 1)) + min;

  return value;
};


var fight = function (enemy) {
  while (enemy.Health > 0 && enemy.Health > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! GoodBye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyyHealth + Math.max(0, enemyyHealth - damage);

    //subtract the value of playerAttact from the value of enemyHealth 
    enemy.Health = Math.max(0, enemy.Health - playerAttack);
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemy.Name + ". " + enemy.Name + " now has " + enemy.Health);
    if (enemy.Health <= 0) {
      console.log(enemy.Name + " has died!");
      playerMoney = Math.max(0, playerMoney + 10);
      break;
    } else {
      window.alert(enemy.Name + " still has " + enemy.Health + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerHealth = Math.max(0, playerHealth - enemy.Attack);
    // Log a resulting message to the console so we know that it worked.
    console.log(enemy.Name + " attacked " + playerName + " . " + playerName + " now has " + playerHealth);
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

var startGame = function () {

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.Health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert("You have lost your Robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!")
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in a battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playinng Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store. Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
switch (shopOptionPrompt) {
  case 'REFILL':
    case 'refill':
      playerInfo.refillHealth();
      break;
    case 'UPGRADE':
    case 'upgrade':
      playerInfo.upgradeAttack();
      break;
    case 'LEAVE':
    case 'leave':
      window.alert('Leaving the store.');

      // do nothing, so function will end
      break;
    default:
    window.alert("You did not pick a valid option. Try again.")
    shop();
    break;
}
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];




startGame();
