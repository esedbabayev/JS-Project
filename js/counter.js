const [counterMinus, counterPlus] = document.querySelectorAll(".counter-elements");
let count = document.getElementById("count");

counterPlus.addEventListener("click", () => {
  if (count.innerHTML) count.innerHTML++;

  if (count.innerHTML > 10) count.innerHTML = 10;
});

counterMinus.addEventListener("click", () => {
  if (count.innerHTML) count.innerHTML--;

  if (count.innerHTML < 0) count.innerHTML = 0;
});