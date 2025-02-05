document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementsById('error-message');
    try{
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });
        const data = await response.json();

        if(response.ok){
            alert(`Inicio de sesión exitoso. Bienvenido, ${data.user.fullName}.`)
            window.location.href = '/dashboard';
        }else{
            alert(result.message || 'Error al iniciar sesión');
        }
});
       
