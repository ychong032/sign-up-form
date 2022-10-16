// const passwordField = document.querySelector("#")
const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector(".password-mismatch");

// password.addEventListener("input", checkPasswordMatch);
// confirmPassword.addEventListener("input", checkPasswordMatch);

function validateForm() {
    if (checkPasswordMatch()) {
        alert("All fields valid. Form successfully submitted!");
        location.reload();
    }
}

function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
        passwordError.style.visibility = "visible";
        password.classList.add("error");
        confirmPassword.classList.add("error");
        password.validity.valid = false;
        confirmPassword.validity.valid = false;
        return false;
    } else {
        passwordError.style.visibility = "hidden";
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        return true;
    }
}

