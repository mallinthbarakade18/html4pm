const form = document.getElementById("fr");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const cnfrmPwdInput = document.getElementById("cnfrmPwd");
const errorsDiv = document.getElementById("errors");

function add() {
  form.classList.toggle("hide");
}

document.getElementById("btn").addEventListener("click", add);
function submitLogic(e) {
  e.preventDefault();
  errorsDiv.textContent = "";
  if (nameInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "Name is required";
    errorsDiv.append(p);
  } if (emailInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "Email is required";
    errorsDiv.append(p);
  } if (passwordInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "Password is required";
    errorsDiv.append(p);
  } if (cnfrmPwdInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "Confirm Password is required";
    errorsDiv.append(p);
  } if (passwordInput.value.trim() != cnfrmPwdInput.value.trim()) {
    const p = document.createElement("p");
    p.textContent = "Password and Confirm Password must be same";
    errorsDiv.append(p);
  }else if  (passwordInput.value.length <= 8) {
    const p = document.createElement("p");
    p.textContent = "Password must be greater than 8 characters";
    errorsDiv.append(p);
  }
}
document.getElementById("fr").addEventListener("submit", submitLogic);

document.getElementById("showPWD").addEventListener("click", function () {
  passwordInput.type = passwordInput.type == "password" ? "text" : "password";
});

document.getElementById("showPWD1").addEventListener("click", function () {
  cnfrmPwdInput.type = cnfrmPwdInput.type == "password" ? "text" : "password";
});
