var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames[1]);

var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



/*var enemyHealth = 100;
var enemyAttack = 10;
var enemyMoney = 10;


var fight = function() {
    window.alert("Welcome to Robot Gladiator, " + playerName);
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter. Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack ;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining"); 
        // Check enemy's Health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left");
        }
        
        playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    } else if (promptFight == "skip" || promptFight == "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip === true) {
                playerMoney = playerMoney - 2;
            }
    } else {
        fight();
    } else {
        window.alert("You need to pick a valid option. Try again!");
      }
}
fight(); */