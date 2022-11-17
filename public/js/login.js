const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameLogin = document.querySelector('#username-input-login');
    const passwordLogin = document.querySelector('#password-input-login');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameLogin.value,
        password: passwordLogin.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  