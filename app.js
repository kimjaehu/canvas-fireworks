import { GradientBox } from "./gradientBox.js";

const COLORS = [
  //purle, blue, green, yellow, orange, red
  { r: 173, g: 17, b: 255 },
  { r: 10, g: 92, b: 255 },
  { r: 26, g: 242, b: 20 },
  { r: 255, g: 239, b: 11 },
  { r: 255, g: 126, b: 11 },
  { r: 253, g: 11, b: 59 },
];

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.boxes = [];

    this.numBoxes = 15;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.createBoxes();
  }

  createBoxes() {
    for (let i = 0; i < this.numBoxes; i++) {
      const gradientBox = new GradientBox(Math.random() * this.stageHeight);
      this.boxes.push(gradientBox);
    }
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    let curColor = 0;

    for (let i = 0; i < this.boxes.length; i++) {
      const color = COLORS[curColor];
      this.boxes[i].draw(this.ctx, color, this.stageWidth, this.stageHeight);

      curColor++;

      if (curColor >= COLORS.length) curColor = 0;
    }
  }
}

window.onload = () => {
  new App();
};
