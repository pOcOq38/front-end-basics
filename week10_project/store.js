const KEY = "QUEUE";
// 1. render queue
const queueList = document.getElementById("queueList");

function loadQueue() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

function renderQueue() {
  const queue = loadQueue();

  queueList.innerHTML = "";

  queue.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.name} (${item.partySize})`;

    queueList.appendChild(li);
  });
}

renderQueue();

window.addEventListener("storage", (e) => {
  if (e.key === KEY) {
    renderQueue();
  }
});

// 2. call next
const callBtn = document.getElementById("callNextBtn");
const current = document.getElementById("currentItem");

callBtn.addEventListener("click", () => {
  const queue = loadQueue();
  if (queue.length === 0) {
    return alert("no waiting");
  }

  const called = queue.shift();

  localStorage.setItem(KEY, JSON.stringify(queue));

  current.textContent = `NOW: ${called.name} (${called.partySize})`;

  renderQueue();
});
