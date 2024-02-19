var selectFrom = document.getElementById("selectFrom");
var selectTo = document.getElementById("selectTo");
var errorMsg = document.querySelector(".error");
var resultMsg = document.querySelector("p");
var title = document.querySelector("h1");
var form = document.querySelector("form");
var inputBin = document.querySelector("input");
// CHANGE TITLE DEPENDING ON selectOptionFrom.value
selectFrom.addEventListener("change", function () {
    switch (selectFrom.value) {
        case "bin":
            title.textContent = "Enter the binary";
            break;
        case "dec":
            title.textContent = "Enter the decimals";
            break;
        case "hex":
            title.textContent = "Enter the hexadecimal value";
            break;
        default:
            title.textContent = "Select an option";
            break;
    }
});
// END CHANGE TITLE DEPENDING ON selectOptionFrom.value
form.addEventListener("submit", function (e) {
    var selectOptionFromIndex = selectFrom.selectedIndex;
    var selectOptionFrom = selectFrom.options[selectOptionFromIndex];
    var selectOptionToIndex = selectTo.selectedIndex;
    var selectOptionTo = selectTo.options[selectOptionToIndex];
    console.log(selectOptionFrom.value);
    console.log(selectOptionTo.value);
    e.preventDefault();
    resultMsg.style.display = "block";
    errorMsg.textContent = "";
    resultMsg.textContent = "";
    var result;
    // CASES
    var binToDec = selectOptionFrom.value === "bin" && selectOptionTo.value === "dec";
    var decToBin = selectOptionFrom.value === "dec" && selectOptionTo.value === "bin";
    var decToHex = selectOptionFrom.value === "dec" && selectOptionTo.value === "hex";
    var hexToBin = selectOptionFrom.value === "hex" && selectOptionTo.value === "bin";
    var hexToDec = selectOptionFrom.value === "hex" && selectOptionTo.value === "dec";
    var binToHex = selectOptionFrom.value === "bin" && selectOptionTo.value === "hex";
    var decToDec = selectOptionFrom.value === "dec" && selectOptionTo.value === "dec";
    var binToBin = selectOptionFrom.value === "bin" && selectOptionTo.value === "bin";
    var hexToHex = selectOptionFrom.value === "hex" && selectOptionTo.value === "hex";
    // END CASES
    switch (true) {
        case binToDec:
            if (inputBin.value.match(/^[0-1]+$/g) === null) {
                errorMsg.style.display = "block";
                errorMsg.textContent = "Entrez le bon format (binaire: 0-1)";
            }
            else {
                var reversedBinary = inputBin.value.split("").map(Number).reverse();
                result = reversedBinary.reduce(function (accumulator, currentValue, index) {
                    return accumulator + currentValue * Math.pow(2, index);
                });
                resultMsg.innerHTML = "Conversion en d\u00E9cimal : <strong>".concat(result, "</strong>");
            }
            break;
        case decToBin:
            result = parseInt(inputBin.value).toString(2);
            resultMsg.innerHTML = "Conversion en binaire : <strong>".concat(result, "</strong>");
            break;
        case decToHex:
            result = parseInt(inputBin.value).toString(16).toUpperCase();
            resultMsg.innerHTML = "Conversion en hexad\u00E9cimal : <strong>".concat(result, "</strong>");
            break;
        case hexToBin:
            result = parseInt(inputBin.value, 16).toString(2);
            resultMsg.innerHTML = "Conversion en binaire : <strong>".concat(result, "</strong>");
            break;
        case hexToDec:
            result = parseInt(inputBin.value, 16).toString(10);
            resultMsg.innerHTML = "Conversion en d\u00E9cimal : <strong>".concat(result, "</strong>");
            break;
        case binToHex:
            result = parseInt(inputBin.value, 2).toString(16).toUpperCase();
            resultMsg.innerHTML = "Conversion en h\u00E9xad\u00E9cimal : <strong>".concat(result, "</strong>");
            break;
        case hexToHex:
            resultMsg.innerHTML = "Conversion en h\u00E9xad\u00E9cimal : <strong>".concat(inputBin.value.toUpperCase(), "</strong>");
            break;
        case binToBin:
            resultMsg.innerHTML = "Conversion en binaire : <strong>".concat(inputBin.value, "</strong>");
            break;
        case decToDec:
            resultMsg.innerHTML = "Conversion en d\u00E9cimal : <strong>".concat(inputBin.value, "</strong>");
            break;
    }
});
