function handleInput(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("input").value.toLowerCase();
    const typing = document.getElementById("typing");

    if (input.includes("hello")) {
      typing.innerText = "Hello sir, how can I assist you today?";
    } else if (input.includes("time")) {
      typing.innerText = "Current time is: " + new Date().toLocaleTimeString();
    } else {
      typing.innerText = "Command not recognized...";
    }

    document.getElementById("input").value = "";
  }
}

