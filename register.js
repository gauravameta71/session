const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  let userDetailsArray =
    JSON.parse(sessionStorage.getItem("userDetailsArray")) || [];

  const existingUser = userDetailsArray.find(
    (user) => user.registeredUsername === username
  );
  if (existingUser) {
    alert("Username already exists. Please choose a different username.");
    return;
  }

  // Extract form data
  const formData = {
    registeredUsername: username,
    phone: phone,
    password: password,
  };

 
  userDetailsArray.push(formData);

  sessionStorage.setItem("userDetailsArray", JSON.stringify(userDetailsArray));

  window.location.href = "login.html";
});
