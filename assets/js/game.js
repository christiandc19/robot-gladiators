var playerName = window.prompt("What is your Robot' name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 100;
var enemyAttack = 10;


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

    //subtract the value of playerAttact from the value of enemyHealth 
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth);
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
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

      enemyHealth = 50;

      fight(pickedEnemyName);

    }
    else {
      window.alert("You have lost your Robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
  window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in a battle.");
  }
  }
  var playAgainConfirm = function() {
    if (playAgainConfirm) {
      startGame();
    } else {
      window.alert("Thank you for playinng Robot Gladiators! Come back soon!")
    }
  }

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



