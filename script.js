// Add a click event listener to the submit button
document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
// Prevent the form from submitting
event.preventDefault();

// Get the values of the name, email, and message fields
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

// Log the values to the console
console.log('Name: ' + name);
console.log('Email: ' + email);
console.log('Message: ' + message);
});
