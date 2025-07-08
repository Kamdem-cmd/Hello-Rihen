let textTag = document.querySelectorAll(".text");
let bgInput = document.querySelector("#bgInput");
let bgColor = document.body;

bgColor.style.backgroundColor = `${bgInput}.value`;

console.log(`bgInput: ${bgInput}.value`);