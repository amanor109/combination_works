window.alert("Counter is loaded");
const counter_label = document.getElementById("counter_label");
const increase_button = document.getElementById("increase_btn");
const decrease_button = document.getElementById("decrease_btn");
const reset_button = document.getElementById("reset_btn");
const home_button = document.getElementById("home_btn");

let current_count = 0;

increase_button.onclick = function (){
    current_counter = 0;
    current_count++;
    counter_label.textContent = current_count;
}
reset_button.onclick = function (){   
    current_count = "(^^) ";
    counter_label.textContent = current_count;
    current_count = 0
}
decrease_button.onclick = function (){
    current_counter = 0;
    current_count--;
    counter_label.textContent = current_count;
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