const numbers =[1, 2,3,4,5,6];
console.log(numbers)

const square_numbers = numbers.map(squares)

numbers.forEach(squares)
numbers.forEach(display_result)

function display_result(element){
    console.log(element)
}


function squares (element){
    return Math.pow(element,2)
}

