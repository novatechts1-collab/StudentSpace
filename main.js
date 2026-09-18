document.addEventListener("DOMContentLoaded", () => {
  const darkbutton = document.querySelector("#logo-header");
  let clickCount = 0;
  darkbutton.addEventListener("click", () => {
    clickCount++;
    if (clickCount % 2 === 1) {
      document.documentElement.setAttribute("data-theme", "light");
      darkbutton.src = 
      console.log("Light Mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      console.log("Dark Mode");
    }
  });
});
