import api from 'Libs/api';

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const isAuthenticated = JSON.parse(localStorage.getItem('auth'));
    if (!isAuthenticated) {
      const { auth } = await api.login();
      localStorage.setItem('auth', auth);
    }
  } catch (e) {
    console.error(e);
  }
});
