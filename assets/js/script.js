//IIFE, allows code to be executed immediately in its own scope
(function () {
  checkMode();
  setMode();
})();

function checkMode() {
  const body = document.body;
  const darkMode = localStorage.getItem("darkMode");
  darkMode === "true"
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode");
}

function setMode() {
  const body = document.body;
  const modeSwitch = document.getElementsByClassName("mode-switch")[0];
  modeSwitch.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("dark-mode");

    body.classList.contains("dark-mode")
      ? localStorage.setItem("darkMode", true)
      : localStorage.setItem("darkMode", false);
  });
}
