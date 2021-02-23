export class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.friction = 0.98;
    this.gravity = 0.1;
    this.speed = Math.random() + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * 5 + 3;
  }

  draw(ctx) {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;

    this.speed *= this.friction;

    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}
