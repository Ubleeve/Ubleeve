document.getElementById("commandInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = this.value.trim();
    this.value = "";
    handleCommand(cmd);
  }
});

function handleCommand(command) {
  const output = document.getElementById("outputArea");
  if (command.startsWith("/scroll open ")) {
    const scrollName = command.split(" ")[2];
    fetch(`scrolls/${scrollName}.html`)
      .then(res => res.ok ? res.text() : Promise.reject("Not found"))
      .then(content => output.innerHTML = content)
      .catch(() => output.innerHTML = "⚠️ Scroll not found.");
  } else {
    output.innerHTML = "Unknown command. Try /scroll open welcome";
  }
}