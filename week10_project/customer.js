const KEY = "QUEUE";

const nameInput = document.getElementById("name");
const partyInput = document.getElementById("party");
const joinBtn = document.getElementById("joinBtn");
const ticketInput = document.getElementById("ticket");

joinBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const partySize = Number(partyInput.value);

  const queue = JSON.parse(localStorage.getItem(KEY) || "[]");

  const item = {
    id: Date.now(),
    name,
    partySize,
    status: "waiting",
  };

  queue.push(item);

  localStorage.setItem(KEY, JSON.stringify(queue));

  const waiting = queue.filter((q) => q.status === "waiting");
  const position = waiting.findIndex((p) => p.id === item.id) + 1;

  ticketInput.textContent = `You're #${position} in line`;
});
