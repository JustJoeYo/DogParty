const nameInput = document.getElementById("dog-name");
const nameButton = document.querySelector("form button");
const headerTitle = document.querySelector(".hero h1");

nameButton.addEventListener("click", (event) => {
  event.preventDefault();
  const dogName = nameInput.value.trim();

  if (dogName) {
    headerTitle.innerHTML = `A Site About <strong>${dogName}</strong>`;
    nameInput.value = "";
  }
});
