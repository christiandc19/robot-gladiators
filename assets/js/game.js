var playerName = window.prompt("What is your Robot' name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 100;
var enemyAttack = 10;


var fight = function(enemyName) {
  while (enemyHealth > 0 && enemyHealth > 0) {
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

  if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
    console.log(playerName + " has chosen to skip the fight! GoodBye!");
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    } 
  }
    
    if (promptFight === 'fight' || promptFight === "FIGHT") {
  //subtract the value of playerAttact from the value of enemyHealth 
  enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth);
  if (enemyHealth <= 0) {
    console.log(enemyName + " has died!");
    break;
  } else {
    console.log(enemyName + " still has " + enemyHealth + " health left.");
  }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth);
    if (playerHealth <= 0) {
      console.log (playerName + " has died!");
      break;
    } else {
      console.log(playerName + " still has " + playerHealth + " health left.");
    }
  } else {
      fight();
//    console.log("You need to choose a valid option. Try again!");
  }
}
}

if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  var pickedEnemyName =  enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
} else {
  window.alert("You have lost your robot in battle! Game Over!");
}

for (var i = 0; i < enemyNames.length; i++){
  var pickedEnemyName =  enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
fight();

























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



