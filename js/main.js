document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    
    function toggleForms(showForm, hideForm) {
        hideForm.style.display = 'none';
        showForm.style.display = 'block';
    }
    
    // Обработчики для ссылок "Register here!"
    document.querySelectorAll('.go-to-signup').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleForms(registerForm, loginForm);
        });
    });
    
    // Обработчики для ссылок "Login here!"
    document.querySelectorAll('.go-to-login').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            toggleForms(loginForm, registerForm);
        });
    });
});
