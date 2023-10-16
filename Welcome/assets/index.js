const input = document.getElementsByTagName("input")[0];
const button = document.getElementById("btn-1");

button.disabled = true;

input.addEventListener("change", () => {
  button.toggleAttribute("disabled");
});
