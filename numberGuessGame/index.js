

let minNum = 50;
let maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
console.log(answer)

let myInput = document.getElementById("myInput");
let myGuess = document.getElementById("myGuess");
let myPara = document.getElementById("myPara");
 

let attamp = 0;
let guess;
let running = true;

myGuess.onclick = function(){
    
    guess = myInput.value;
    guess = Number(guess)

    if(isNaN(guess)){
        myPara.textContent = `Please Enter a valid number`

    }else if(guess < minNum || guess > maxNum){
        myPara.textContent = `Please Enter a valid number`

    }else{
        attamp++;
        if(guess < answer){
        myPara.textContent = `Too Low! Try again.`

        }else if(guess > answer){
        myPara.textContent = `Too High! Try again.`
        }else{
        myPara.innerHTML = `Congratulaion!<br/> The answer is ${answer}.<br/>You try ${attamp} attamps`;


        }
        
    

    }
    myInput.value = '';
}

