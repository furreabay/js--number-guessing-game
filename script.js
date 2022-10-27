const guessButton = document.querySelector(".guessButton");
const guessInput = document.querySelector(".guessInput");

const previousGuessList = document.querySelector(".previousGuessList")

const lowerHigher = document.querySelector(".lowerHigher");


guessButton.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 101);
    lowerHigher.style.display = "block";

    if (guessInput.value < randomNumber) {
        lowerHigher.textContent = "You need to guess lower than " + randomNumber + ", try again...";
        const newLi = document.createElement("li");
        newLi.textContent = guessInput.value + "(too low)";
        previousGuessList.appendChild(newLi);
    } else if (guessInput.value > randomNumber) {
        lowerHigher.textContent = "You need to guess higher than " + randomNumber + ", try again...";
        const newLi = document.createElement("li");
        newLi.textContent = guessInput.value + "(too high)";
        previousGuessList.appendChild(newLi);
    } else if (guessInput.value == randomNumber) {
        lowerHigher.textContent = "You guessed the right number! " + randomNumber;
        const newLi = document.createElement("li");
        newLi.textContent = guessInput.value + "(correct guess)";
        previousGuessList.appendChild(newLi);
    }
})

