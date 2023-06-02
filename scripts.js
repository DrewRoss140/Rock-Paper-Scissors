const overlay = document.getElementById("overlay");
const nameMenu = document.getElementById("name-menu");
const continueButton = document.getElementById("continue-button");

window.onload = function () {
  nameMenu.classList.add("active");
  continueButton.addEventListener("click", function () {
    nameMenu.classList.remove("active");
    nameMenu.classList.add("inactive");
    setTimeout(function () {
      nameMenu.classList.remove("inactive");
      nameMenu.classList.add("hidden");
      overlay.classList.add("fade-out");
    }, 3000);
    setTimeout(function () {
      overlay.classList.remove("active", "inactive");
    }, 3000);
    setTimeout(function () {
      overlay.classList.add("hidden");
      overlay.classList.remove("fade-out");
    }, 6000);
  });
};
