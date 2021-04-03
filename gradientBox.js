export class GradientBox {
  constructor(y) {
    this.y = y;
    this.vy = Math.random() * 16 - 8;
    // this.minHeight = 800;
    // this.maxHeight = 1400;
    this.minHeight = 100;
    this.maxHeight = 100;
    
    this.height = this.randomHeight();
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  draw(ctx, color, translateX, translateY, scale) {
    this.y += this.vy;

    if (this.y < 0 - this.stageWidth / scale) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > this.stageHeight + this.height / scale) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate((this.stageWidth - translateX) / scale, -translateY);
    ctx.rotate((Math.PI / 180) * 120);

    ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;

    const grd = ctx.createLinearGradient(
      this.stageWidth / 2,
      this.y,
      this.stageWidth / 2,
      this.y + this.height
    );

    grd.addColorStop(0, `rgba(${color.r},${color.g},${color.b}, 0)`);
    grd.addColorStop(0.5, `rgba(${color.r},${color.g},${color.b}, 1)`);
    grd.addColorStop(1, `rgba(${color.r},${color.g},${color.b}, 0)`);

    ctx.fillStyle = grd;
    ctx.fillRect(
      0,
      this.y,
      Math.sqrt(this.stageWidth * this.stageWidth + this.stageHeight * this.stageHeight) / scale,
      this.height
    );
    // ctx.restore();
  }

  randomHeight() {
    return Math.random() * (this.maxHeight - this.minHeight) + this.minHeight;
  }
}
