const gen_button = document.getElementById("generate");
const home_btn = document.getElementById('home_btn');

gen_button.onclick =function (lenght,includelowercase, includeuppercase,includenumbers, includesymbols){
    
    let password_lenght = document.getElementById("password_lenght").value;
    let uppercasetoggle = document.getElementById('uppercase');
    let lowercasetoggle = document.getElementById('lowercase');
    let numberstoggle = document.getElementById('numbers');
    let symbolstoggle = document.getElementById('symbols');
    let password_result = document.getElementById('password-result');


    let passwordlength = password_lenght;
    //let includelowercase;
   // let includeuppercase;
   // let includenumbers;
  //  let includesymbols;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";
    let charset = "";
    if(!lowercasetoggle.checked && !uppercasetoggle.checked && !numberstoggle.checked && !symbolstoggle.checked){
        window.alert("You can't generate a password without using these characters")
        charset = 'Error'
    }
    else{
    
        if (lowercasetoggle.checked){
            charset += lowercase;
        }
    
        if (uppercasetoggle.checked){
            charset += uppercase;
        }

        if (numberstoggle.checked){
        
            charset += numbers
        }
    
        if (symbolstoggle.checked){
        
            charset += symbols
        }

        let password = "";
        for (let i = 0; i < password_lenght; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    

        password_result.textContent =  `Your random password is ${password}`
    }

    
}

/*function randompasswordgen(lenght, includelowercase, includeuppercase, includenumbers, includesymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
   
    if (lowercasetoggle.checked){
        includelowercase = true
    }
    else{
        includelowercase = false
    }
    let charset = "";
    if (includelowercase) {
        charset += lowercase;
    }
    if (uppercasetoggle.checked){
        includelowercase = true
    }
    else{
        includelowercase = false
    }
    if (includeuppercase) {
        charset += uppercase;
    }
    if (numberstoggle.checked){
        includelowercase = true
    }
    else{
        includelowercase = false
    }
    if (includenumbers) {
        charset += numbers;
    }
    if (symbolstoggle.checked){
        includelowercase = true
    }
    else{
        includelowercase = false
    }
    if (includesymbols) {
        charset += symbols;
    }

    let password = "";
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    console.log(password)
}

*/



//gen_button.onclick = randompasswordgen(passwordlength, includelowercase, includeuppercase, includenumbers, includesymbols)
home_btn.onclick = function (){
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
