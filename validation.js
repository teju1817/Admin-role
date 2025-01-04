document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.admin-section');
    const navbarLinks = document.querySelectorAll('.navbar ul li');
    
    // Toggle active section
    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all
        navbarLinks.forEach(item => item.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
  
        // Add active class to clicked link and its section
        link.classList.add('active');
        document.getElementById(link.getAttribute('data-target')).classList.add('active');
      });
    });
  
    // Get table body for users
    const usersTableBody = document.getElementById('users-table-body');
    
    // Add new user to the table dynamically
    function addUserToTable(id, username, email) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${id}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      usersTableBody.appendChild(newRow);
      
      // Enable delete and edit buttons for the new row
      enableDeleteButton();
      enableEditButton();
    }
  
    // Add a test user (example: JohnDoe) on page load
    addUserToTable(1, "JohnDoe", "johndoe@example.com");
  
    // Function to enable delete button functionality for all delete buttons
    function enableDeleteButton() {
      const deleteButtons = document.querySelectorAll('.delete-btn');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const row = e.target.closest('tr');
          row.remove(); // Remove the row from the table
        });
      });
    }
  
    // Function to enable edit button functionality for all edit buttons
    function enableEditButton() {
      const editButtons = document.querySelectorAll('.edit-btn');
      editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const row = e.target.closest('tr');
          const username = row.cells[1].textContent;
          const email = row.cells[2].textContent;
          const newUsername = prompt("Edit Username:", username);
          const newEmail = prompt("Edit Email:", email);
  
          // If new values are provided, update the row
          if (newUsername && newEmail) {
            row.cells[1].textContent = newUsername;
            row.cells[2].textContent = newEmail;
          }
        });
      });
    }
  
    // Attach event listeners for delete and edit buttons on initial load as well
    enableDeleteButton();
    enableEditButton();
  
    // Example: Add user when 'Add User' button is clicked
    document.getElementById('add-user-btn').addEventListener('click', () => {
      const id = usersTableBody.rows.length + 1; // Generate new ID
      const username = prompt("Enter Username:");
      const email = prompt("Enter Email:");
  
      if (username && email) {
        addUserToTable(id, username, email);
      } else {
        alert("Please fill both fields.");
      }
    });
  });
  
  
  
  
