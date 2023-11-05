const iconDown = document.getElementById("icon-down");
const listResult = document.getElementById("list-country");

iconDown.addEventListener("click", () => {
  if (listResult.style.display == "block") {
    listResult.style.display = "none";
  } else {
    listResult.style.display = "block";
  }
});
