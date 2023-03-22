let heightInput = document.querySelector(".height-input-field");
let weightInput = document.querySelector(".weight-input-field");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".answer");

let BMI, height, weight;

calculateButton.addEventListener("click", () => {

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight / (height ** 2);
    result.innerText = BMI;

    if (BMI < 18.5) {
        statement.innerText = "Your BMI falls within the underweight range";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
        statement.innerText = "You fall in healthy range";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        statement.innerText = "You fall in overweight range";
    } else {
        statement.innerText = "You fall in obese range";
    }
});