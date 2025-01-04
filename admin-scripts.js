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
  
    // Example: Add dynamic content to Users Table
    const usersTableBody = document.getElementById('users-table-body');
    document.getElementById('add-user-btn').addEventListener('click', () => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>1</td>
        <td>JohnDoe</td>
        <td>johndoe@example.com</td>
        <td><button>Edit</button> <button>Delete</button></td>
      `;
      usersTableBody.appendChild(newRow);
    });
  });
  
  
  