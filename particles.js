const c=document.getElementById("particles");
const x=c.getContext("2d");
function resize(){c.width=innerWidth;c.height=innerHeight;}
resize();addEventListener("resize",resize);

let p=[...Array(70)].map(()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  r:Math.random()*2+1,
  s:Math.random()*0.6+.2
}));

(function a(){
  x.clearRect(0,0,c.width,c.height);
  p.forEach(o=>{
    x.beginPath();
    x.arc(o.x,o.y,o.r,0,Math.PI*2);
    x.fillStyle="rgba(255,0,0,.6)";
    x.fill();
    o.y-=o.s;if(o.y<0)o.y=c.height;
  });
  requestAnimationFrame(a);
})(); canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

// Full screen canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Particle settings
const PARTICLE_COUNT = 70;
const particles = [];

// Create particles
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.8,
    speed: Math.random() * 0.6 + 0.2,
    alpha: Math.random() * 0.6 + 0.2
  });
}

// Animation loop
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 0, ${p.alpha})`;
    ctx.fill();

    // Move particle upward
    p.y -= p.speed;

    // Reset particle when it goes out
    if (p.y < -10) {
      p.y = canvas.height + 10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateParticles);
}

// Start animation
animateParticles();
