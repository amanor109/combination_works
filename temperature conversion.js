const home_button = document.getElementById("home_btn");
const input = document.getElementById('user_input');
const tofah = document.getElementById('cel_fah');
const tocel = document.getElementById('fah_cel');
const convert_button = document.getElementById('convert_btn');
const result = document.getElementById('result');
let temp;
/*function convert(){
    if(tofah.checked){

        temp = input.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp} °F `;
    }
    else if(tocel.checked){
        temp = input.value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp} °C`;
    }

    else{
        result.textContent = "You need to select a unit"
    }
} */

convert_button.onclick = function (){
    if(tofah.checked){

        temp = input.value;
        temp = Number(temp);
        temp = temp * 9 / 5 + 32;
        temp = Math.floor(temp)
        result.textContent = `${temp} °F `;
    }
    else if(tocel.checked){
        temp = input.value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        temp = Math.floor(temp)
        result.textContent = `${temp} °C`;
    }

    else{
        result.textContent = "You need to select a unit"
    }

};







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