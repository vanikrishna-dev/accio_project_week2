const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const emailIcon = document.getElementById("emailIcon");
const passwordIcon = document.getElementById("passwordIcon");

const successMsg = document.getElementById("successMsg");
const submitBtn = document.getElementById("submitBtn");

let isEmailValid = false;
let isPasswordValid = false;

email.addEventListener("input", () => {
  const value = email.value;

  if (value.length > 3 && value.includes("@") && value.includes(".")) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    emailError.textContent = "";
    emailIcon.textContent = "✔";
    isEmailValid = true;
  } else {
    email.classList.add("invalid");
    email.classList.remove("valid");
    emailError.textContent =
      "Email must be >3 chars and include @ and .";
    emailIcon.textContent = "❌";
    isEmailValid = false;
  }

  updateUI();
});

password.addEventListener("input", () => {
  const value = password.value;

  if (value.length > 8) {
    password.classList.add("valid");
    password.classList.remove("invalid");
    passwordError.textContent = "";
    passwordIcon.textContent = "✔";
    isPasswordValid = true;
  } else {
    password.classList.add("invalid");
    password.classList.remove("valid");
    passwordError.textContent =
      "Password must be more than 8 characters";
    passwordIcon.textContent = "❌";
    isPasswordValid = false;
  }

  updateUI();
});

function updateUI() {
  if (isEmailValid && isPasswordValid) {
    successMsg.textContent = "All good to go!";
    successMsg.classList.add("success-text");
    submitBtn.disabled = false;
  } else {
    successMsg.textContent = "";
    submitBtn.disabled = true;
  }
}

submitBtn.addEventListener("click", () => {
  const confirmAction = confirm("Do you want to submit?");

  if (confirmAction) {
    alert("Successful signup!");
  } else {
    email.value = "";
    password.value = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";
    emailIcon.textContent = "";
    passwordIcon.textContent = "";
    email.classList.remove("valid", "invalid");
    password.classList.remove("valid", "invalid");
    submitBtn.disabled = true;
  }
});