const gen_button = document.getElementById("generate");

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
    if (lowercasetoggle.checked){
        charset += lowercase;
    }
    
    if (uppercasetoggle.checked){
        charset += uppercase;
    }

    if (numberstoggle.checked){
        includelowercase = true
        charset += numbers
    }
    
    if (symbolstoggle.checked){
        includelowercase = true
        charset += symbols
    }

    let password = "";
    for (let i = 0; i < password_lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    if(!lowercasetoggle.checked && !uppercasetoggle.checked && !numberstoggle.checked && !symbolstoggle.checked){
        window.alert("You can't generate a password without using these characters")
        
    }

    password_result.textContent =  `Your random password is ${password}`
    

    
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
