function rollDice(){
    const number_of_dice = document.getElementById("dice_number").value
    const dice_result = document.getElementById("dice_result")
    const dice_images = document.getElementById("dice_image")
    const user_score = document.getElementById("user_score")
    const total_score = document.getElementById("total_score")
    const percentage = document.getElementById("percentage")


    const values = []
    const images = []


    for (i = 0; i < number_of_dice; i++){
        const value = Math.floor(Math.random()* 6) + 1
        values.push(value)
        images.push(`<img src = "${value}.png" alt = "Dice ${values}">`)
    }

    let sum = 0;
    for(const num of values){
        sum += num

    }


    user_score.textContent = `Your score is: ${sum}`
    total_score.textContent = `Out of a total of: ${number_of_dice * 6}`
    percentage.textContent = `Percentage: ${Math.floor(sum / (number_of_dice * 6 ) * 100)}%`
    dice_result.textContent = `Dice: ${values.join(', ')}`;
    dice_images.innerHTML = images.join('')
}
