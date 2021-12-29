var playerName = window.prompt("What is your Robot's name?")
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roberto";
var enemyHealth = 100;
var enemyAttack = 10;

var fight = function() {
    window.alert("Welcome to Robot Gladiator")
    enemyHealth = enemyHealth - playerAttack ;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
    
    // Check enemy's Health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left");
    }
}

fight();