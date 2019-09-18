// java script for the blackjack game
var dealNum = 0;
var playNum = 0;



// sets up the game by giving the player and the dealer two random "cards" 
var start = function()
{
    
    // set up the dealer
    var dealer = document.getElementById("dealer");
    var card1 = math();
    var card2 = math();
    dealNum = card1 + card2;
    var strDealNum = dealNum.toString();
    dealer.innerHTML = strDealNum;
    
    // set up player
    var person = document.getElementById("player");
    card1 = math();
    card2 = math();
    playNum = card1 + card2;
    var strPlayNum = playNum.toString();
    player.innerHTML = strPlayNum;
    
    
    // reset the board
    var black = document.getElementById("label")
    black.innerHTML = "BlackJack";
    
    // make sure they can click the button until after the game is played
    document.getElementById("start").onclick = null;
    
};



// randomly generates a number from 1-10
var math = function()
{
    
    // random number generator (1-10)
    var ran = Math.floor((Math.random() * 10) + 1);
    

    return ran;
    
    
}