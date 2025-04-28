document.body.classList.add('day');

function handleClick(radio) {
  if (radio.value === "night") {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("day");
  }
}