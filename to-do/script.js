const add = document.getElementById("submit-button");
console.log(add)
let input;
add.addEventListener("click", function () {
  console.log(input);
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  input = document.getElementById("input").value;
  console.log(input);
});
