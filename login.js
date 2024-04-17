const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  
  const userDetailsArray =
    JSON.parse(sessionStorage.getItem("userDetailsArray")) || [];

  
  const user = userDetailsArray.find(
    (user) =>
      user.registeredUsername === enteredUsername &&
      user.password === enteredPassword
  );

  if (user) {
    sessionStorage.setItem("username", enteredUsername);
    sessionStorage.setItem("password", enteredPassword);

    
    window.location.href = "user-details.html";
  } else {
    alert("Invalid username or password");
  }
});
