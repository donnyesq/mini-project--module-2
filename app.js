const form = document.querySelector("#form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const submitButton = document.querySelector("#submit");
const clear = document.querySelector("#clear");

submitButton.addEventListener("click", function () {
  // CHECK PASSWORD
  let str = password.value;
  const error = document.querySelector("#error");

  if (str.length < 10) {
    error.innerText =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
    error.style.display = "flex";
    password.style.border = "2px solid red";
  } else if (password.value !== confirmPassword.value) {
    error.innerText = "Your passwords don't match.";
    error.style.display = "flex";
    confirmPassword.style.border = "2px solid red";
    // CHECK THE TERMS
  } else if (!document.querySelector("#terms").checked) {
    window.alert("You must agree to the terms and conditions");
  }
});

const clearErrors = () => {
  error.style.display = "none";
  password.style.border = "";
  confirmPassword.style.border = "";
};

form.addEventListener("submit", function (event) {
  clearErrors();
  window.alert("Success!");
  event.preventDefault();
});

clear.addEventListener("click", function () {
  location.reload();
});
