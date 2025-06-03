
const API_URL = "https://your-api-url/api";

function login() {
  const clientId = "1379012073551564962";
  const redirectUri = encodeURIComponent("https://solarbeam1124.github.io/E/");
  const scopes = encodeURIComponent("identify guilds");
  const oauthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes}`;
  window.location.href = oauthUrl;
}

window.onload = function () {
  const hash = window.location.hash.substr(1);
  const result = hash.split('&').reduce(function (res, item) {
    const parts = item.split('=');
    res[parts[0]] = parts[1];
    return res;
  }, {});

  if (result.access_token) {
    document.getElementById('dashboard').classList.remove('hidden');
    fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${result.access_token}` }
    })
      .then(resp => resp.json())
      .then(user => {
        const userId = user.id;
        fetch(`${API_URL}/profile?discord_id=${userId}`)
          .then(resp => resp.json())
          .then(profile => {
            document.getElementById('username').textContent = profile.robloxUsername;
            document.getElementById('robloxId').textContent = profile.robloxId;
            document.getElementById('joinLink').textContent = profile.joinLink || 'None';
            document.getElementById('avatar').src = `https://www.roblox.com/headshot-thumbnail/image?userId=${profile.robloxId}&width=420&height=420&format=png`;
          });
      });
  }
};
