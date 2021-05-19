
let myFirstVariable = 2

let mySecondVariable = 5

console.log(myFirstVariable + mySecondVariable)

let numberOfClicks = 0

function myFunction() {
    numberOfClicks = numberOfClicks + 1
    const counterContainer = document.getElementById("counter-display")
    counterContainer.innerText = numberOfClicks

    if (numberOfClicks === 10) {
        counterContainer.style.color = "red"
    }

}
// comment single line
/*
comment
multiple
lines
*/


