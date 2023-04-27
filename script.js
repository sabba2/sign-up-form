// select password input, store as password
// select pass confirmation, store as confirmPass
// when confirm pass is unfocused, compare if values are the same
// if not equal, apply error class, else do nothing

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let passWrapper = document.querySelector(".pass-wrapper");

password.classList.remove("error");
confirmPassword.classList.remove("error");
passWrapper.classList.remove("pass-wrapper");

function toggleError(element) {
  if (element.classList.contains("error")) {
    element.classList.remove("error");
    if (element === password) {
      passWrapper.classList.remove("pass-wrapper");
    }
  } else {
    element.classList.add("error");
    if (element === password) {
      passWrapper.classList.add("pass-wrapper");
    }
  }
}

function comparePass(password, confirmPassword) {
  if (
    password.value !== confirmPassword.value &&
    !password.classList.contains("error")
  ) {
    toggleError(password);
    toggleError(confirmPassword);
  } else if (
    password.value === confirmPassword.value &&
    password.classList.contains("error")
  ) {
    toggleError(password);
    toggleError(confirmPassword);
  }
}
password.addEventListener("focusout", () => {
  comparePass(password, confirmPassword);
});

confirmPassword.addEventListener("focusout", () => {
  comparePass(password, confirmPassword);
});
