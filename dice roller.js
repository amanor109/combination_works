const home_button = document.getElementById("home-btn");

function rollDice(){
    const num_of_dice = document.getElementById("num_of_dice").value
    const dice_result = document.getElementById("dice_result")
    const dice_images = document.getElementById("dice_images")

    const values = []
    const images = []
    

    for(let i = 0; i <num_of_dice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        values.push(value); 
        images.push(`<img src ="${value}.png"  alt = "Dice ${value}">`);

    }

    dice_result.textContent = `dice: ${values.join(',  ')}`

    dice_images.innerHTML = images.join('')

    
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