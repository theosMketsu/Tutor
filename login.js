// Sample users data to simulate a database check (in real-world, you'd query a database)
const usersDatabase = [
  { email: 'testuser@example.com'},
  { email: 'johndoe@example.com'},
  { email: 'test@gmail.com'}
];

// Function to check if the email exists in the database
function checkEmailExists(email) {
  // Check if the entered email exists in the simulated "database"
  return usersDatabase.some(user => user.email === email);
}

// Function to handle the login process
function handleLogin(event) {
  event.preventDefault(); // Prevents form submission and page reload

  // Get the email from the input field
  const email = document.querySelector('.input-field').value.trim();

  // Check if the email is empty
  if (!email) {
      alert('Please enter an email address.');
      return;
  }

  // Check if the email exists in the "database"
  if (checkEmailExists(email)) {
      // Redirect to the main page if the email is found
      window.location.href = 'main.html';
  } else {
      // Show an error if the email is not found
      alert('Email not found. Please check your email or register.');
  }
}

// Add event listener to the sign-in button
document.getElementById('submit').addEventListener('click', handleLogin);
