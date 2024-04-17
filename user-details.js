// Retrieve array of user details from session storage
const userDetailsArray =
  JSON.parse(sessionStorage.getItem("userDetailsArray")) || [];

// Reference the table body element where user details will be displayed
const userDetailsTableBody = document.getElementById("user-details-table-body");

// Clear any existing rows
userDetailsTableBody.innerHTML = "";

// Loop through the array and create table rows to display each user's details
userDetailsArray.forEach((userDetails, index) => {
  // Create table row
  const row = document.createElement("tr");

  // Create table cells for username and phone
  const usernameCell = document.createElement("td");
  usernameCell.textContent = userDetails.registeredUsername;
  row.appendChild(usernameCell);

  const phoneCell = document.createElement("td");
  phoneCell.textContent = userDetails.phone;
  row.appendChild(phoneCell);

  // Create delete button
  const deleteButtonCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  // Add event listener to delete button
  deleteButton.addEventListener("click", () => {
    // Remove the user details from the array
    userDetailsArray.splice(index, 1);
    // Update session storage with the modified array
    sessionStorage.setItem(
      "userDetailsArray",
      JSON.stringify(userDetailsArray)
    );
    // Remove the row from the table
    userDetailsTableBody.removeChild(row);
  });
  deleteButtonCell.appendChild(deleteButton);
  row.appendChild(deleteButtonCell);

  // Append row to table body
  userDetailsTableBody.appendChild(row);
});
