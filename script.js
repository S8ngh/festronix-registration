let soundUnlocked = false;

/* Unlock sound */
document.addEventListener("click", () => {
  const t = document.getElementById("thunderSound");
  if (!soundUnlocked && t) {
    t.play().then(() => {
      t.pause(); t.currentTime = 0;
      soundUnlocked = true;
    }).catch(()=>{});
  }
},{once:true});

/* Form */
document.querySelector("form").addEventListener("submit",()=>{
  document.getElementById("successMsg").innerText =
    "✅ Registration Successful! Your data has been saved.";
});

/* Countdown */
const festDate = new Date("2025-02-20T09:00").getTime();
setInterval(()=>{
  const c=document.getElementById("countdown");
  const d=festDate-Date.now();
  if(d<=0){c.innerText="🚪 THE GATE IS OPEN";return;}
  c.innerText=`⏳ ${Math.floor(d/86400000)}d`;
},1000);

/* Lightning */
const lightning=document.getElementById("lightning");
const thunder=document.getElementById("thunderSound");

function triggerLightning(){
  lightning.classList.remove("flash");
  void lightning.offsetWidth;
  lightning.classList.add("flash");
  if(soundUnlocked){
    thunder.currentTime=0;
    thunder.play().catch(()=>{});
  }
}
setInterval(()=>{ if(Math.random()>0.5) triggerLightning(); },7000);// Random lightning (realistic)
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
