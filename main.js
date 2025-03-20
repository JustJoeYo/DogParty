const nameInput = document.getElementById("dog-name");
const form = document.querySelector("form");
const headerTitle = document.querySelector(".hero h1");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dogName = nameInput.value.trim();

  if (dogName) {
    headerTitle.innerHTML = `A Site About <strong>${dogName}</strong>`;
    nameInput.value = "";
  }
});
