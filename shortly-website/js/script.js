const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errorMessage = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const linkValue = input.value;
  if (linkValue === "") {
    errorMessage.innerText = "Please add a link";
    input.classList.add("border-red");
  } else if (!linkValue.includes("http://") && !linkValue.includes("https://")) {
    errorMessage.innerText = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errorMessage.innerText = "";
    input.classList.remove("border-red");
    alert("Form submitted successfully!");
  }
}

const hamburgerButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

hamburgerButton.addEventListener('click', navToggle);

function navToggle() {
  hamburgerButton.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}