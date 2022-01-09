var playerName = window.prompt("What is your Robot' name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 100;
var enemyAttack = 10;


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (min - max + 1)) + min;

  return value;
};


var fight = function (enemyName) {
  while (enemyHealth > 0 && enemyHealth > 0) {
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
    enemyHealth = Math.max(0, enemyHealth - playerAttack);
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth);
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died!");
      playerMoney = Math.max(0, playerMoney + 10);
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerHealth = Math.max(0, playerHealth - enemyAttack);
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth);
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber(40, 60);

      fight(pickedEnemyName);

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
  case "refill":
  case "REFILL":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars");
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    } 
    else {
      window.alert("You don't have enough money");
    }
    break;
  case "upgrade":
  case "UPGRADE":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollalrs");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    } else {
      window.alert("you don't have enough money!");
    }
    break;

  case "leave":
  case "LEAVE":
    window.alert("Leaving the store.");
    break;

  default:
    window.alert("You did not pick a valid option. Try again.")
    shop();
    break;
}
};

startGame();























/*var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 100;
var enemyAttack = 10;
var enemyMoney = 10;


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    //window.alert("Welcome to Robot Gladiator, " + playerName);
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          break;
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
      
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
      
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
      } else {
        window.alert("You need to choose a valid option. Try again!");
      }
}
}

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
} */



