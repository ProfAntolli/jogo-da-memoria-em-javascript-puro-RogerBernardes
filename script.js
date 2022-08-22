const cards = document.querySelectorAll('.memory-card');

let hasflippedCard =false;
let lockBoard = false;
let FirtCard, SecondCard;

function flipCard(){
    if(lockBoard) return;
    if(this === FirtCard) return;
    this.classList.add('flip');

    
   if(!hasflippedCard){
    //first click
    hasflippedCard=true;
    FirtCard=this;

    return;
   }
   
    //second Click
    SecondCard=this;
    checkMatch();
 }


function checkMatch (){
    let isMatch = FirtCard.dataset.framework === 
    SecondCard.dataset.framework;

    isMatch? Disabledcards (): unflipcards ();

}

function Disabledcards (){
    FirtCard.removeEventListener('click', flipCard);
        SecondCard.removeEventListener('click', flipCard);

        resetBoard();
}

function unflipcards (){
    lockBoard = true;
    setTimeout(() => {
        FirtCard.classList.remove('flip');
        SecondCard.classList.remove("flip");

        resetBoard();
    
        },1500);

}

function resetBoard (){
[hasflippedCard, lockBoard] = [false,false];
[FirtCard, SecondCard] = [null, null];

}

(function surffle () {
    cards.forEach(card => {
        let ramdomPos = Math.floor (math.ramdom () * 12 );
        card.style.order = ramdomPos;
    });
});


cards.forEach(card => card.addEventListener('click', flipCard));





