// ...existing code...
axios.post('https://elevatree.onrender.com/api/login', {
  username: userInput.username, // Ensure these variables contain valid values
  password: userInput.password
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // ...existing code to handle success...
})
.catch(error => {
  console.error('Auth error:', error); // Log detailed error
});
// ...existing code...
