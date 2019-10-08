/*
 * Create a list that holds all of your cards
 */
const deck = document.querySelector(".deck");
const cards = document.querySelectorAll(".card");
let movesCount = document.querySelector(".moves");
let match = document.getElementsByClassName("match");
const show = document.querySelector(".show");;
const open = document.querySelector(".open");
const resetIcon = document.querySelector(".restart");
const scorePanel = document.querySelector(".score-panel");
const stars = document.querySelector(".stars");
let cardsOpen = [];
let moves = 0;


// document.body.onload = start();
// resetIcon.addEventListener("click",start());
// function start(){
//     cards= shuffle(cards);
//     for (var i= 0; i < shuffledCards.length; i++){
//         deck.innerHTML = "";
//         [].forEach.call(shuffledCards, function(item){
//            deck.appendChild(item);
//         });
//      }
//   cards[i].classList.remove("show","open","match");
// }



deck.addEventListener("click",function(e){
  if(e.target.classList.contains("card") && !e.target.classList.contains("show","open")){
    e.target.classList.toggle("show")&&e.target.classList.toggle("open")
    cardOpen(e);
   }
  
});



function cardOpen(e) {
    cardsOpen.push(e.target);
    if(cardsOpen.length === 2){
        movesDone();
        if(cardsOpen[0].innerHTML === cardsOpen[1].innerHTML){
             matched();
        } else {
            unmatched();
        }
        
    }
}
function matched(){
cardsOpen[0].classList.add("match");
cardsOpen[1].classList.add("match");
cardsOpen = [];
swal("Its a match");
if(match.length === 16){
    swal({
        title: "Congrats!",
        text: "You won!",
        icon: "success",
    });

}

};

function unmatched(){
    setTimeout(function(){
        cardsOpen[0].classList.remove("show","open");
        cardsOpen[1].classList.remove("show","open");
        cardsOpen =[];
        swal ( "Oops" ,  "Not a match!" )
    }, 500);
};

function movesDone(){
    moves++
    movesCount.innerHTML= moves;
    console.log(moves)
    if(moves == 10||moves == 14||moves== 18||moves == 20||moves == 22){
        stars.removeChild(stars.children[0]);
    };

};
resetIcon.addEventListener("click",function(){
    for(let card of cards){
    card.classList.remove("open","match","show")
   
 };
 movesCount.innerHTML = 0;
 moves = 0;


});





function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
