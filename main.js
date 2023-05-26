document.addEventListener("input", (event) => {
  if (event.target.value.length > 1) {
    event.target.value = event.target.value.slice(0, 1);
  } else if (isNaN(Number(event.target.value))) {
    event.target.value = "";
  }
});

document.addEventListener("keypress", (event) => {
  if (event.key === " ") {
    document.querySelectorAll("input").forEach((node) => {
      node.value = "";
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.hasAttribute("inputmode") && event.target.value.length > 0) {
    event.target.value = "";
  }
});
