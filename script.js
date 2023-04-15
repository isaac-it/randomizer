let generatedNumbers = [];

function generateNumber() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (generatedNumbers.includes(randomNumber));

    generatedNumbers.push(randomNumber);

    document.getElementById("number").innerHTML = randomNumber;
}
