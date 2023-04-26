// select password input, store as password
// select pass confirmation, store as confirmPass
// when confirm pass is unfocused, compare if values are the same
// if not equal, apply error class, else do nothing

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

password.classList.remove("error");
confirmPassword.classList.remove("error");

function toggleError(element) {
  if (element.classList.contains("error")) {
    element.classList.remove("error");
  } else {
    element.classList.append("error");
  }
}
