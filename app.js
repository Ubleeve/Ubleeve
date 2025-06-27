const scrolls = [
  "🔥 'I will pour out My Spirit on all flesh.' — Joel 2:28",
  "🕊 'The Remnant shall return, even the remnant of Jacob, unto the mighty God.' — Isaiah 10:21",
  "💡 'Arise, shine, for your light has come!' — Isaiah 60:1",
  "⚔️ 'You are My battle axe and weapons of war.' — Jeremiah 51:20",
  "🌌 'Before I formed you in the womb I knew you.' — Jeremiah 1:5"
];

function revealScroll() {
  const message = scrolls[Math.floor(Math.random() * scrolls.length)];
  document.getElementById('scroll').innerText = message;
}
