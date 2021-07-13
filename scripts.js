// select element function
const selectElement = (s) => document.querySelector(s);

// open menu
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
// close menu
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
