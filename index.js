let dealtCards=document.getElementById("cards-dealt");
// OR
// let dealtCards=document.querySelector("#cards-dealt");

let totalSum=document.getElementById("total-sum");
// OR
// let totalSum=document.querySelector("#total-sum");

let outcomeMsg=document.getElementById("msgfor-player"); 
// OR 
// let outcomeMsg=document.querySelector("#msgfor-player");

let outcomeMsg2=document.getElementById("outcome-msg2"); 
// OR 
// let outcomeMsg=document.querySelector("#outcome-msg");

let playerData=document.getElementById("playerdata");




let sum=0;
let hasBlackJack = false; // for checking the state if the player has a BlackJack or not
let isAlive=true; //to check if the player is in game or not after the cards have been dealt
let message="";
let container;
let cards=[];
let player={
    playerName:"Shardul",
    playerChips:145
    
}

// playerData.textContent=player.playerName + ": " + "$" +player.playerChips; 
function startGame(){
//    cards=[];

isAlive=true;
hasBlackJack=false;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    // cards.push(firstCard);
    // cards.push(secondCard);
  cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
renderGame();
} 

function newCard(){
    // console.log("Drawing a new card from the deck");
    if(isAlive==true && hasBlackJack==false){
    let cardNew = getRandomCard();
   sum+=cardNew;
cards.push(cardNew);

   renderGame();
    }
}

function renderGame(){
dealtCards.textContent = "Cards: ";

    for(let i=0;i<cards.length;i++){
        // if(i===0){
        //     dealtCards.textContent +=cards[i]
        // }
        // else{
        dealtCards.textContent +=cards[i] + ", " ;
    }

    totalSum.textContent="Sum: " + sum;
    if(sum<=20){
        message="Do you want to draw another card? 🙂";
      
        } 
        else if(sum===21){
            message="Wohoo! you've got BlackJack! 🎉";
           
        hasBlackJack=true;
        }
        else{
            message="Oops!, You are out of the game 😭";
            isAlive=false;
        }
outcomeMsg.textContent=message;
}

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
return 10;
    }
    else if(randomNumber===1){
        return 11;
    }
    return randomNumber;
    // return randomNumbers;
}

