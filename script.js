console.log("Hello World");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// function calcFactAge(year) {
//   const d = new Date();
//   const currentYear = d.getFullTear();
//   const age = currentYear - year;

//   if (age >= 0) {
//     return age;
//   } else {
//     return "Impossiable Year";
//   }
// }
