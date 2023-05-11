var x = document.getElementById("signup");
var y = document.getElementById("login");
var z = document.getElementById("btn");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");



login = () => {
  x.style.left = "-450px";
  y.style.left = "50px";
  z.style.left = "110px";
  if (y.checkValidity()) {
    y.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Log In successful!");
      return;
    });
  }
};

register = () => {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
  if (x.checkValidity()) {
    x.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Account created! please login to your profile.");
      return;
    });
  }
};
