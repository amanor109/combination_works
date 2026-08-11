window.alert("Random Number Generator is loaded");
const roll_button = document.getElementById("generate-btn");
const display_1 = document.getElementById("result1");
const display_2 = document.getElementById('result2');
const display_3 = document.getElementById("result3");
const home_button = document.getElementById("back-to-home-btn");
const die_1 = document.getElementById("die_1");
const die_2 = document.getElementById("die_2");
const die_3 = document.getElementById('die_3');
const total_score = document.getElementById("total_points");

const max = 6;
const min = 1;
let random_number1;
let random_number2;
let random_number3;
let score;


roll_button.onclick = function(){
    random_number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    display_1.textContent = random_number1;

    random_number2 = Math.floor(Math.random() *(max - min + 1)) + min;
    display_2.textContent = random_number2;

    random_number3 = Math.floor(Math.random() * (max - min + 1)) + min;
    display_3.textContent = random_number3;

    score = random_number1 + random_number2 + random_number3;
    total_score.textContent = `Score: ${score}`;

    if(random_number1 == 6 && random_number2 == 6 && random_number3 == 6){
    window.alert("Nice! All 6s 🍾")
    }
    else if(random_number1 == random_number2 && random_number1 == random_number3){
    window.alert("Matching numbers 😎")
    }
};

die_1.onclick = function() {
    random_number1 = Math.floor(Math.random() * (max-min + 1) + min );
    display_1.textContent = random_number1;
    score = random_number1 + random_number2 + random_number3;
    total_score.textContent = `Score: ${score}`;
    if(random_number1 == 6 && random_number2 == 6 && random_number3 == 6){
    window.alert("Nice! All 6s 🍾")
    }
    else if(random_number1 == random_number2 && random_number1 == random_number3){
    window.alert("Matching numbers 😎")
    }
}

die_2.onclick = function(){
    random_number2 = Math.floor(Math.random() * (max-min+1) + min);
    display_2.textContent = random_number2;
    score = random_number1 + random_number2 + random_number3;
    total_score.textContent = `Score: ${score}`;
    if(random_number1 == 6 && random_number2 == 6 && random_number3 == 6){
    window.alert("Nice! All 6s 🍾")
    }
    else if(random_number1 == random_number2 && random_number1 == random_number3){
    window.alert("Matching numbers 😎")
    }
}

die_3.onclick = function(){
    random_number3 = Math.floor(Math.random() *(max-min +1) + min);
    display_3.textContent = random_number3;
    score = random_number1 + random_number2 + random_number3;
    total_score.textContent = `Score: ${score}`;
    if(random_number1 == 6 && random_number2 == 6 && random_number3 == 6){
    window.alert("Nice! All 6s 🍾")
    }
    else if(random_number1 == random_number2 && random_number1 == random_number3){
    window.alert("Matching numbers 😎")
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