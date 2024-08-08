document.addEventListener('DOMContentLoaded', () => {
    // Handle signup form submission
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const secondName = document.getElementById('secondName').value;
        const surname = document.getElementById('surname').value;
        const nickname = document.getElementById('nickname').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const password = document.getElementById('password').value;

        if (email !== confirmEmail) {
            alert('Emails do not match');
            return;
        }

        console.log(`First Name: ${firstName}`);
        console.log(`Second Name: ${secondName}`);
        console.log(`Surname: ${surname}`);
        console.log(`Nickname: ${nickname}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        // Perform actual signup logic here (e.g., send data to server)
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        // Perform actual login logic here (e.g., authenticate with server)
    });
});
