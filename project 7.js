class Animals {
    static number_counter = 0
    alive(){
        console.log(`The ${this.name} is alive`)
        Animals.number_counter++
    }

    eat(){
        console.log(`The ${this.name} is eating`)
    }

    sleep(){
        console.log(`The ${this.name} is sleeping`)
    }
    
}

class Rabbit extends Animals{
    name = 'Rabbit'
    
    movement(){
        console.log(`This ${this.name} is running`)
    }
}

class Hawk extends Animals{
    name = 'Hawk'
    movement (){
        console.log(`This ${this.name} is flying`)
    }
}

class Snake extends Animals{
    name = 'Snake'
    movement (){
        console.log(`This ${this.name} is crawling`)
    }
    bite (){
        console.log(`This .${this.name} can bite`)
    }
}

class Lion extends Animals{
    name = 'Lion'
    movement (){
        console.log(`This ${this.name} runs`)
    }
}
const hawk = new Hawk()
const rabbit = new Rabbit()
const snake = new Snake()
const lion = new Lion()

rabbit.alive()
rabbit.eat()
rabbit.sleep()
rabbit.movement()

hawk.alive()
hawk.eat()
hawk.sleep()
hawk.movement()

lion.alive()
lion.eat()
lion.sleep()
lion.movement()

snake.alive()
snake.eat()
snake.sleep()
snake.movement()
snake.bite()

console.log(`The total animals created are ${Animals.number_counter}`)























































































































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
