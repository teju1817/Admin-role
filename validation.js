document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginErrorMessage = document.getElementById('loginErrorMessage');
  const showSignup = document.getElementById('showSignup');
  const showLogin = document.getElementById('showLogin');

  // Regular Expression for Email Validation (Optional)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Switch between Login and Signup form
  showSignup.addEventListener('click', () => {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.add('active');
  });

  showLogin.addEventListener('click', () => {
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
  });

  // Handle login form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // If email is being entered for the first time, validate it
    const savedEmail = sessionStorage.getItem('email');

    if (!savedEmail) {
      const loginEmail = loginUsername; // Treat the username as email (if username is email format)
      // Check if the entered email is valid using a regular expression (optional)
      if (!emailPattern.test(loginEmail)) {
        loginErrorMessage.textContent = "Please enter a valid email address.";
        return;
      } else {
        // Save the email if it's valid
        sessionStorage.setItem('email', loginEmail);
      }
    }

    // Save the username for future use (if needed)
    sessionStorage.setItem('username', loginUsername);
    
    // Redirect to the dashboard (successful login)
    window.location.href = 'dashboard.html'; // Make sure your dashboard.html exists
  });

  // Signup form submission logic
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const signupUsername = document.getElementById('signup-username').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    // Check if the email is valid (optional)
    if (!emailPattern.test(signupEmail)) {
      signupErrorMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (signupUsername && signupEmail && signupPassword) {
      alert('Signup successful!');
      document.getElementById('signupForm').classList.remove('active');
      document.getElementById('loginForm').classList.add('active');
    } else {
      signupErrorMessage.textContent = 'Please fill all fields correctly.';
    }
  });
});
