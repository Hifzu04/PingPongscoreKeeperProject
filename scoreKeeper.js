const b1button = document.querySelector('#b1');
const b2button = document.querySelector('#b2');
const p1Dispaly = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');
const winningScoreTarget =  document.querySelector('#winningScore');    //winning score is winning target

//variable to keep increasing the score
let p1Score = 0;
let p2Score = 0;
//default winning score(target)
let winningScore= 5;

let isGameOver = false;

//when you click on the button1
b1button.addEventListener('click', function () {
    if(isGameOver=== false){       //if(!isGameOver)
        p1Score += 1;
        p1Dispaly.textContent = p1Score;
         if(p1Score === winningScore){
            p1Dispaly.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
             isGameOver = true;
             b1button.disabled = true;
             b2button.disabled = true;
         }
        
    }
})


//when you click on the button2
b2button.addEventListener('click', function () {
    if(isGameOver==false){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            p2Display.classList.add('has-text-success');
            p1Dispaly.classList.add('has-text-danger')
            isGameOver = true;
            b1button.disabled = true;
            b2button.disabled = true;
        }
        
    }
})



//selection of winning target
winningScoreTarget.addEventListener('change' , function(){
    //modify winning target
    winningScore= parseInt(this.value);
    //when winning target gets modified , current score shoud also get reset.
    reset();
})

//reset button
resetBtn.addEventListener('click' , reset);

function reset() {
    isGameOver= false;
    p1Score =0;
    p2Score =0;
    p1Dispaly.textContent = 0; 
    p2Display.textContent =0;
    p1Dispaly.classList.remove('has-text-success' ,'has-text-danger');
    p2Display.classList.remove('has-text-success' ,'has-text-danger');
    b1button.disabled=false;
    b2button.disabled = false;
}



