function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
}
document.getElementById('loginBtn').addEventListener('click', () => {
  window.location.href = 'https://discord.com/oauth2/authorize?client_id=1379012073551564962&response_type=code&redirect_uri=https%3A%2F%2Fsolarbeam1124.github.io%2FE%2F&scope=identify+guilds';
});
