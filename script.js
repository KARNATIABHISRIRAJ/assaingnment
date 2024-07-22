document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Example of API call using fetch
    fetch('/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, role })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        // Redirect based on role (example)
        if (role === 'STUDENT') {
            window.location.href = '/student/dashboard.html';
        } else if (role === 'FACULTY_MEMBER') {
            window.location.href = '/faculty/dashboard.html';
        } else if (role === 'ADMINISTRATOR') {
            window.location.href = '/admin/dashboard.html';
        }
    })
    .catch(error => {
        document.getElementById('error-msg').textContent = 'Invalid credentials. Please try again.';
    });
});
