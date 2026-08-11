const submit_button = document.getElementById("home-page-submit");
const feedback_input = document.getElementById("home-page-input");



submit_button.onclick = function() { 
    let feedback = feedback_input.value;
    switch(feedback) {
        case "":
            window.alert("Please enter your feedback before submitting.");
            break;
        default:
            window.alert("Thank you for your feedback! We appreciate your input.");
    }
    console.log(feedback);
    
}