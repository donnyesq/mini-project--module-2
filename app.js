const form = document.querySelector("#form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const submitButton = document.querySelector("#submit");
const clear = document.querySelector("#clear");

const randomWords =
  "water way we weapon wear week weight well west western what whatever when where whether which white who whole whom whose why wide wife will win wind wish within without woman wonder word work worker world worry would write writer wrong yard yeah year yes yet you young your yourself";

const randomWordsArr = randomWords.split(" ");

submitButton.addEventListener("click", function () {
  // CHECK PASSWORD
  let str = password.value;
  const error = document.querySelector("#error");

  if (str.length < 10) {
    let word1 = "";
    let word2 = "";
    let word3 = "";
    let word4 = "";
    let word5 = "";

    const generatePassword = (arr) => {
      word1 += arr[Math.round(Math.random() * 30)];
      word2 += arr[Math.round(Math.random() * 30)];
      word3 += arr[Math.round(Math.random() * 30)];
      word4 += arr[Math.round(Math.random() * 30)];
      word5 += arr[Math.round(Math.random() * 30)];
    };

    generatePassword(randomWordsArr);

    error.innerText = `Your password is too short! Try something like ${word1}-${word2}-${word3}-${word4}-${word5}.`;
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
