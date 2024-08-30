document.getElementById('show-login').addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    const title = document.getElementById('login-title');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    loginForm.classList.add('show');
    title.classList.add('animate-title');
    username.classList.add('animate-username');
    password.classList.add('animate-password');
    loginButton.classList.add('animate-login-btn');
});