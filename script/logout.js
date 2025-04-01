document.getElementById('logout-btn').addEventListener('click', function () {
    // Optional: Clear stored session data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Redirect to login page
    window.location.href = './index.html';
});
