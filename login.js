document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;
    if (userEmail == 'bank@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        document.write('Please dont enter wrong informations.')
    }
});

