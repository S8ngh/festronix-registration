let soundUnlocked = false;

const overlay = document.getElementById("tapOverlay");
const lightning = document.getElementById("lightning");
const thunder = document.getElementById("thunderSound");

/* ===== UNLOCK ON TAP ===== */
overlay.addEventListener("click", () => {
  thunder.volume = 1.0;
  thunder.play().then(()=>{
    thunder.pause();
    thunder.currentTime = 0;
    soundUnlocked = true;
    overlay.style.display = "none";
    triggerLightning(); // immediate effect
  }).catch(()=>{});
});

/* ===== DOUBLE LIGHTNING + THUNDER ===== */
function triggerLightning(){
  if(!lightning) return;

  // First flash
  lightning.classList.add("flash");
  if(soundUnlocked){
    thunder.currentTime = 0;
    thunder.play().catch(()=>{});
  }

  // Second flash (cinematic)
  setTimeout(()=>{
    lightning.classList.remove("flash");
    void lightning.offsetWidth;
    lightning.classList.add("flash");
  }, 300);

  setTimeout(()=>{
    lightning.classList.remove("flash");
  }, 900);
}

/* Random storm every 8–14 sec */
setInterval(()=>{
  if(Math.random()>0.4){
    triggerLightning();
  }
}, 10000);

/* ===== FORM SUCCESS ===== */
document.querySelector("form").addEventListener("submit",()=>{
  document.getElementById("successMsg").innerText =
    "✅ Registration Successful! Your data has been saved.";
});
