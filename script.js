// java script for the blackjack game




// sets up initial vars
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

// auto generated dealer 
var pass = function()
{
    
    // make dealer go until >= 15
        // while loop
    while (dealNum<=15)     
    {
        var card = math();
        dealNum=card + dealNum;
        var strDealNum = dealNum.toString();
        dealer.innerHTML = strDealNum;
    
    }
    
    // compare the player and dealer num
    // project who wins in the title
    if (playNum>dealNum || dealNum>21)
    {
        black.innerHTML="User Won";
    } 
    else 
    {
        black.innerHTML="Dealer Won";
    }
    
    
    // make sure they can click the button until after the game is played / disable ability to play
    document.getElementById("start").disabled = false;
    document.getElementById("pass").disabled = true;
    document.getElementById("hit").disabled = true;
    
    
    
    
    
    
    
};

// connected to the thit button, changes the users number
var hit= function()
{
    // Adds cards to eachother
    var card = math(); 
    playNum= card + playNum;
    var strPlayNum = playNum.toString();
    player.innerHTML = strPlayNum;
    
   //catches if the player goes above 21
    if (playNum>21) 
    {
        // resets the buttons and makes the label
        document.getElementById("hit").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("pass").disabled = true;
        black.innerHTML="Dealer Won"
    }
    
    
    
}

// randomly generates a number from 1-10
var math = function()
{
    
    // random number generator (1-10)
    var ran = Math.floor((Math.random() * 10) + 1);
    

    return ran;
    
    
};