const home_button = document.getElementById("home-btn");
const submit_button = document.getElementById("submit_btn");
const generated_number = document.getElementById("the_number");
const score_stat = document.getElementById("scores");
const percentage_stat = document.getElementById("percentage");
const user_input = document.getElementById("user_input");
const congrat = document.getElementById("thank_you")
const win_lose = document.getElementById("you_are")
const previous = document.getElementById("prev")

let counter = 0;
let guess;
let percentage;
let score = 0;
let correct_number;
const max = 5;
const min = 1;
let previous_guess;
submit_button.onclick = function(){
    
    counter++
    correct_number = Math.floor(Math.random() * (max-min + 1) + min);
    guess = user_input.value;   
    guess = Math.floor(guess)
    if (guess ==''){
        window.alert('You need to type something you weirdo 🤣')
    }
    if(guess>5){
        window.alert(`Your guess cannot be more than 5 you dummy 😭`)
    }
    previous_guess = guess;
    if (guess == correct_number){
        score++ ; 
        percentage = (score/counter) * 100;
        score_stat.textContent = `You have won ${score} out of ${counter}`;
        generated_number.textContent = `The number is :  ${correct_number}`;
        percentage_stat.textContent = `Your percentage score is ${percentage}%`
        congrat.textContent = `Congratulations`
        win_lose.textContent = "You win" 
        if (counter > 1){
            previous.textContent = `Your previous guess was ${previous_guess}`
        }
        else{
            previous.textContent = `...........`
        }

    }
    else{
        percentage = (score/counter) * 100;
        score_stat.textContent = `You have won ${score} out of ${counter}`;
        generated_number.textContent = `The number is :  ${correct_number}`;
        percentage_stat.textContent = `Your percentage score is ${percentage}%`
        congrat.textContent = `You are wrong`
        win_lose.textContent = `You lose`

        if (counter > 1){
            previous.textContent = `Your previous guess was ${previous_guess}`
        }
        else{
            previous.textContent = `...........`
        }

    }
    
   

}

home_button.onclick = function (){
    let leave_stay = window.prompt("Are you sure you want to go back to the home page? (y/n)");
    if (leave_stay === "y") {
        let rate = window.prompt("Rate this experience from 1 to 10");
        rate = +rate;
        if(typeof(rate) === "number" && rate >= 1 && rate <= 10) {
            window.alert("Thank you for your feedback! You will now be redirected to the home page.");
            window.location.href = "index.html";
        }
        else{
            window.alert("Invalid rating! Please enter a number between 1 and 10.");
            
        }
    }
    else if (leave_stay === "n") {
        window.alert("You will stay on the counter page.");
        
    }
    else {
        window.alert("Blind ass mother fucker!");
    }


}

