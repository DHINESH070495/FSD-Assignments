/* SIGNUP */
let signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

    if (name === "") {
      document.getElementById("nameError").innerText = "Required";
      valid = false;
    } else document.getElementById("nameError").innerText = "";

    if (!email.includes("@")) {
      document.getElementById("emailError").innerText = "Invalid email";
      valid = false;
    } else document.getElementById("emailError").innerText = "";

    if (phone.length !== 10) {
      document.getElementById("phoneError").innerText = "Enter 10 digits";
      valid = false;
    } else document.getElementById("phoneError").innerText = "";

    if (!isNaN(city)) {
      document.getElementById("cityError").innerText = "Only letters allowed";
      valid = false;
    } else document.getElementById("cityError").innerText = "";

    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Minimum 8 characters";
      valid = false;
    } else document.getElementById("passwordError").innerText = "";

    if (password !== confirmPassword) {
      document.getElementById("confirmError").innerText = "Passwords do not match";
      valid = false;
    } else document.getElementById("confirmError").innerText = "";

    if (valid) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Signup successful!");
      window.location.href = "index.html";
    }
  });
}

/* SIGNIN */
let signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "landing.html";
    } else {
      alert("Invalid email or password");
    }
  });
}
