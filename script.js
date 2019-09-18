// java script for the blackjack game
var dealNum = 0;
var playNum = 0;
var black = document.getElementById("label")
var person = document.getElementById("player");
 var dealer = document.getElementById("dealer");

document.getElementById("pass").disabled = true;
document.getElementById("hit").disabled = true;

// sets up the game by giving the player and the dealer two random "cards" 
var start = function()
{
    
    // set up the dealer
    var card1 = math();
    var card2 = math();
    dealNum = card1 + card2;
    var strDealNum = dealNum.toString();
    dealer.innerHTML = strDealNum;
    
    // set up player
    card1 = math();
    card2 = math();
    playNum = card1 + card2;
    var strPlayNum = playNum.toString();
    player.innerHTML = strPlayNum;
    
    
    // reset the board
    black.innerHTML = "BlackJack";
    
    // make sure they can click the button until after the game is played/ enable the other two buttons
    document.getElementById("start").disabled = true;
    document.getElementById("pass").disabled = false;
    document.getElementById("hit").disabled = false;
    
};

var pass = function()
{
    
    // make dealer go unti he >= 15
        // while loop
    
    // compare the player and dealer num
    
    // project who wins in the title
    
    // make sure they can click the button until after the game is played / disable ability to play
    document.getElementById("start").disabled = false;
    document.getElementById("pass").disabled = true;
    document.getElementById("hit").disabled = true;
    
    
    
    
    
    
    
};


// randomly generates a number from 1-10
var math = function()
{
    
    // random number generator (1-10)
    var ran = Math.floor((Math.random() * 10) + 1);
    

    return ran;
    
    
};