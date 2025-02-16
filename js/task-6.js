function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
    const count = Number(input.value);
    
    
    box.innerHTML = "";
}
