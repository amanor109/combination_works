const fruits = [{name: 'apple', color:'red',calories: 95},
                {name: 'orange', color: 'orange', calories: 45},
                {name: 'banana', color: 'yellow', calories: 105},
                {name: 'coconut', color: 'yellow', calories: 159},
                {name: 'pineapple', color: 'red', calories: 95}
]

console.log(fruits.length)
console.log("Hello world")
let counter = 0;
/*while (counter < 3){
    console.log("Hello world")
    counter++
}
*/














































const home_button = document.getElementById("home_btn");
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
