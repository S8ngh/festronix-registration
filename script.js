/* ================= FORM SUBMISSION ================= */
var submitted = false;

document.querySelector("form").addEventListener("submit", function () {

  // Success message
  document.getElementById("successMsg").innerText =
    "✅ Registration Successful! Your data has been saved.";

  // Mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  // Screen shake
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 400);
});

/* ================= COUNTDOWN TIMER ================= */
const festDate = new Date("2025-02-20T09:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = festDate - now;

  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  if (diff <= 0) {
    countdownEl.innerText = "🚪 THE GATE IS OPEN";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.innerText =
    `⏳ Gate opens in ${days}d ${hours}h ${minutes}m`;
}, 1000);

/* ================= LIGHTNING + THUNDER ================= */
const lightning = document.getElementById("lightning");
const thunder = document.getElementById("thunderSound");

function triggerLightning() {
  if (!lightning) return;

  lightning.classList.add("flash");

  // Thunder sound
  if (thunder) {
    thunder.currentTime = 0;
    thunder.play().catch(() => {});
  }

  setTimeout(() => {
    lightning.classList.remove("flash");
  }, 200);
}

// Random lightning (realistic)
setInterval(() => {
  if (Math.random() > 0.6) {
    triggerLightning();
  }
}, 8000);
  setTimeout(() => {
    lightning.classList.remove("flash");
  }, 200);
}
}

// Random lightning every 6–15 seconds
setInterval(() => {
  if (Math.random() > 0.6) {
    triggerLightning();
  }
}, Math.random() * 9000 + 6000);
setInterval(() => {
  triggerLightning();
}, 4000);
