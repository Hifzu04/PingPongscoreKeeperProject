const b1button = document.querySelector('#b1');
const b2button = document.querySelector('#b2');
const p1Dispaly = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');

//variable to keep increasing the score
let p1Score = 0;
let p2Score = 0;

const winningScore = 5;
let isGameOver = false;

//when you click on the button1
b1button.addEventListener('click', function () {
    if(isGameOver=== false){       //if(!isGameOver)
        p1Score += 1;
        p1Dispaly.textContent = p1Score;
         if(p1Score === winningScore){
             isGameOver = true;
         }
        
    }
})


//when you click on the button2
b2button.addEventListener('click', function () {
    if(isGameOver==false){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            isGameOver = true;
        }
        
    }
})

// //reset button
// reset.addEventListener('click' , function(){
//     isGaveOver= false;
//     p1Score =0;
//     p2Score =0;
//     p1Dispaly = 0 ; 
//     p2Display =0;
// })

