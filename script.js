function verificarCodigo() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const conteudo = document.getElementById("conteudo");

  if (codigo === "a") {
    conteudo.classList.remove("escondido");
  } else {
    alert("Código incorreto! Tente novamente ❤️");
  }
}
const canvas = document.getElementById('canvas-corações');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 2 + 1;
  this.alpha = Math.random() * 0.5 + 0.5;
}

Heart.prototype.draw = function () {
  ctx.fillStyle = `rgba(255, 105, 180, ${this.alpha})`;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size / 2,
                    this.x + this.size, this.y + this.size / 2,
                    this.x, this.y + this.size);
  ctx.bezierCurveTo(this.x - this.size, this.y + this.size / 2,
                    this.x - this.size / 2, this.y - this.size / 2,
                    this.x, this.y);
  ctx.fill();
};

Heart.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
};
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    h.update();
    h.draw();
  });
  requestAnimationFrame(animate);
}

for (let i = 0; i < 50; i++) {
  hearts.push(new Heart());
}

animate();
