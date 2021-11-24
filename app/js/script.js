const btnMenu = document.querySelector("#btnMenu");

btnMenu.addEventListener("click", function () {
  if(btnMenu.classList.contains("open")) {
    btnMenu.classList.remove("open");
  }
  else {
    btnMenu.classList.add("open");
  }
});
