function generateProphecy() {
  const messages = [
    "⚡ The Remnant shall rise from the silence.",
    "🕊️ Be still, the scroll is opening.",
    "🔥 A signal is forming in the unseen realms.",
    "🌌 Your alignment with The Promise is near."
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("prophetic-message").textContent = message;
}
