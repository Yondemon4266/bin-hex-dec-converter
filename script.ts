const selectFrom = document.getElementById("selectFrom") as HTMLSelectElement;
const selectTo = document.getElementById("selectTo") as HTMLSelectElement;
const errorMsg = document.querySelector(".error") as HTMLDivElement;
const resultMsg = document.querySelector("p") as HTMLParagraphElement;
const title = document.querySelector("h1") as HTMLHeadingElement;
const form = document.querySelector("form") as HTMLFormElement;
const inputBin = document.querySelector("input") as HTMLInputElement;
// CHANGE TITLE DEPENDING ON selectOptionFrom.value
selectFrom.addEventListener("change", () => {
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

form.addEventListener("submit", (e) => {
  const selectOptionFromIndex = selectFrom.selectedIndex;
  const selectOptionFrom = selectFrom.options[selectOptionFromIndex];
  const selectOptionToIndex = selectTo.selectedIndex;
  const selectOptionTo = selectTo.options[selectOptionToIndex];
  console.log(selectOptionFrom.value);
  console.log(selectOptionTo.value);

  e.preventDefault();

  resultMsg.style.display = "block";
  errorMsg.textContent = "";
  resultMsg.textContent = "";
  let result: number | string;

  // CASES
  const binToDec =
    selectOptionFrom.value === "bin" && selectOptionTo.value === "dec";

  const decToBin =
    selectOptionFrom.value === "dec" && selectOptionTo.value === "bin";
  const decToHex =
    selectOptionFrom.value === "dec" && selectOptionTo.value === "hex";
  const hexToBin =
    selectOptionFrom.value === "hex" && selectOptionTo.value === "bin";
  const hexToDec =
    selectOptionFrom.value === "hex" && selectOptionTo.value === "dec";

  const binToHex =
    selectOptionFrom.value === "bin" && selectOptionTo.value === "hex";
  const decToDec =
    selectOptionFrom.value === "dec" && selectOptionTo.value === "dec";
  const binToBin =
    selectOptionFrom.value === "bin" && selectOptionTo.value === "bin";
  const hexToHex =
    selectOptionFrom.value === "hex" && selectOptionTo.value === "hex";

  // END CASES
  switch (true) {
    case binToDec:
      if (inputBin.value.match(/^[0-1]+$/g) === null) {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Entrez le bon format (binaire: 0-1)";
      } else {
        const reversedBinary = inputBin.value.split("").map(Number).reverse();
        result = reversedBinary.reduce(
          (accumulator, currentValue, index) =>
            accumulator + currentValue * Math.pow(2, index)
        );
        resultMsg.innerHTML = `Conversion en décimal : <strong>${result}</strong>`;
      }
      break;
    case decToBin:
      result = parseInt(inputBin.value).toString(2);
      resultMsg.innerHTML = `Conversion en binaire : <strong>${result}</strong>`;
      break;
    case decToHex:
      result = parseInt(inputBin.value).toString(16).toUpperCase();
      resultMsg.innerHTML = `Conversion en hexadécimal : <strong>${result}</strong>`;
      break;
    case hexToBin:
      result = parseInt(inputBin.value, 16).toString(2);
      resultMsg.innerHTML = `Conversion en binaire : <strong>${result}</strong>`;
      break;
    case hexToDec:
      result = parseInt(inputBin.value, 16).toString(10);
      resultMsg.innerHTML = `Conversion en décimal : <strong>${result}</strong>`;
      break;
    case binToHex:
      result = parseInt(inputBin.value, 2).toString(16).toUpperCase();
      resultMsg.innerHTML = `Conversion en héxadécimal : <strong>${result}</strong>`;
      break;
    case hexToHex:
      resultMsg.innerHTML = `Conversion en héxadécimal : <strong>${inputBin.value.toUpperCase()}</strong>`;
      break;

    case binToBin:
      resultMsg.innerHTML = `Conversion en binaire : <strong>${inputBin.value}</strong>`;
      break;

    case decToDec:
      resultMsg.innerHTML = `Conversion en décimal : <strong>${inputBin.value}</strong>`;
      break;
  }
});
