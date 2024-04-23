const b1button = document.querySelector('#b1');
const b2button = document.querySelector('#b2');
const p1Dispaly = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

//variable to keep increasing the score
let p1Score = 0;
let p2Score = 0;

let winningScore = 5; 
let isGaveOver = false;

//when you click on the button1
b1button.addEventListener('click' , function(){
if (p1Score != winningScore && isGaveOver==false){

    p1Score+=1;
    //update span text content from p1 to the new score 
    p1Dispaly.textContent= p1Score;
    }else{
        isGaveOver = true;
    }
    
})
//when you click on the button2
b2button.addEventListener('click' , function(){
    if (p2Score != winningScore && isGaveOver==false){
    
        p2Score+=1;
        //update span text content from p2 to the new score 
        p2Display.textContent= p2Score;
        }else{
            isGaveOver = true;
        }
        
    })