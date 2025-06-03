
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const profile = await fetchUserProfile();
    document.getElementById("username").textContent = profile.username;
    document.getElementById("robloxId").textContent = profile.robloxId;
    document.getElementById("joinLink").innerHTML = `<a href="${profile.joinLink}" target="_blank">Join</a>`;
    document.getElementById("avatar").src = profile.avatar;
  } catch (e) {
    console.error("Failed to load profile", e);
  }

  const ticketButton = document.getElementById('create-ticket');
  if (ticketButton) {
    ticketButton.addEventListener('click', () => {
      const supportLog = document.getElementById('support-log');
      const ticket = document.createElement('p');
      ticket.textContent = '📝 Ticket created! A moderator will contact you soon.';
      supportLog.appendChild(ticket);
    });
  }
});
