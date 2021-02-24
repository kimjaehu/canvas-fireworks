import { Firework } from "./firework.js";
import { GradientBox } from "./gradientBox.js";
import { Particle } from "./particle.js";
import { Star } from "./star.js";

const COLORS = [
  //blue, yellow, red, pink, purple

  { r: 57, g: 62, b: 143 }, //blue
  { r: 243, g: 204, b: 100 }, //Yellow
  { r: 177, g: 34, b: 40 }, //Red
  { r: 239, g: 190, b: 183 }, //Pink
  { r: 167, g: 107, b: 254 }, //purple
];

const FIREWORK_COLORS = [
  { r: 255, g: 207, b: 64 }, // yellow
];

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // 1058 x 988

    this.p = new Path2D(
      "M523.5,20.833v24.833v2.667h-4.666v-9.667l-30.5-3.333v-4.667L519.667,18L523.5,20.833z M523.5,51h-5      L491,261.998h60.333L523.5,51z M489,270.33l-8.667,14h81l-7.331-13.999L489,270.33z M491,304.995h57.667l11.666-13h-79.667      L491,304.995z M458,258.001l-10.667,104h24L458,258.001z M374.667,319.333L362,470h25.333L374.667,319.333z M317.333,511.999      l-30,177.333h60L317.333,511.999z M287.125,696.252v29.08h61.542v-29.08H287.125z M249,615.5l-12.5,72H261L249,615.5z M200,588.5      l-22.5,139H223L200,588.5z M176.75,733.25V751H224v-18L176.75,733.25z M612.5,458l-16,75.75H628L612.5,458z M663.667,555.334      l-18,119H682L663.667,555.334z M714,596.667L699.333,684H727L714,596.667z M699.5,690.125v20h28.375V690.25L699.5,690.125z       M745.338,718.333h39.666L764.671,583L745.338,718.333z M543,595c-40.04,0-72.5,32.46-72.5,72.5S502.96,740,543,740      s72.5-32.46,72.5-72.5S583.04,595,543,595z M808.5,757.833V723h-65l-6.5,34.5h-4l-6-41.5h-29.541v10.667h-2.792L683.333,680      h-41.335v-67.336L629,596.332v-56.999h-35.001v-96.334h-21.334v-7h18.669v-12.332L576.667,299L560,423.667h-11.333V313.333h-57      L491.5,454H536v5h-44v19.5h-13.5v-88l-5.5-20h-61.5l-19.75,109.25l-3.25-3.25h-29V741l-11-10h-64L266,750.5V763h-4.5v-70H237v74h-4      l-8.5-9h-48l-15,15.5V808l18,22.5h213.75c0,0,62.917-14.545,59.75-81.5c-3.5-74-80.5-76-80.5-76s1-108,1-108l95.5-1l-0.167,15.497      l-80.667-0.164L388,658.167c0,0,76.5,12.333,82,91.333c0,56.5-43.25,81-43.25,81H808v-23l17.5-12.5v-28.5L808.5,757.833z       M542.75,754.5c-48.463,0-87.75-39.287-87.75-87.75S494.287,579,542.75,579s87.75,39.287,87.75,87.75S591.213,754.5,542.75,754.5z       M178.167,924.663c-4-6.33-7.667-0.663-7.667-0.663c-8,8.84-19.5,37.99-19.5,37.99c-10.667-0.667-7.333,1.667-7.333,1.667      l5.667,4.666c-7,8.666-5.667,21.667-5.667,21.667c5.667,10.333,10.333,2.667,10.333,2.667l7.333-17.489l15-0.167l0.833,8.322      C183,994.323,189,991.99,189,991.99C192.667,953.99,178.167,924.663,178.167,924.663z M166.667,959.667      c0.333-3.333,4.333-12.334,6-12.5s1.667,13,1.667,13S166.584,960.496,166.667,959.667z M193.875,981.625      c4.375,6.75,11.625,6.25,11.625,6.25c16.75-3.875,19.875-11.125,19.875-11.125c3.375-7.125,0.875-10.75-3-10.875      s-15.75,5.875-15.75,5.875c-2.875-1.625,4.75-42.125,4.75-42.125c-4.5-9.75-7.625-3.125-7.625-3.125      C187.875,961.625,193.875,981.625,193.875,981.625z M270.875,936.875c-3.625-12.375-11.75-10.625-11.75-10.625      c-12.125-0.125-14.75,10.125-14.75,10.125c-3.125,0.375-3.375,0-3.375,0c-16.625-3.875-16.625-10.625-16.625-10.625      c0.375-2.25-1.125-1.625-1.125-1.625c-2.75,0.25-3.875,5.125-3.875,5.125C215.75,940.5,237,949.625,237,949.625      c-7.25,8.5-5.125,45.375-5.125,45.375c9.875,18,15,9.125,15,9.125c-1-55.125,2.75-52.375,2.75-52.375      c1.75,0.75,9.5,0.125,9.5,0.125C272.875,949.875,270.875,936.875,270.875,936.875z M255.125,937.875c0,0,1.875-4.5,7.375-4      C262.5,933.875,263.375,938.25,255.125,937.875z M412.25,925.5c0,0-34.25-50.5-104.75-56.5c0,0-24-2.25-36,2c0,0-17,6.5-15.5,13.75      c0,0,1.5,5.75,9,4.5s6.5-2,6.5-2s2-3.75-7.75-3c0,0-7-3,14.25-3c0,0,22.75-0.75,26.5,0.5c0,0,69.25,6.5,98.75,60      c0,0,10.25,22.75-11,35.5c0,0-20.25,14.75-56.5,7.25v-37.25l11.5,0.25c0,0,20.75,2,24.5,8.25c0,0,1.5,2.75-5.75,6.25      c0,0-0.5,3.25,6.25,3.75c0,0,11-0.5,12.75-12c0,0,1.5-8.75-14-15.5c0,0-6.75-5.25-35.75-6V916.5c0,0-3.25-11.5-9.25-12.25      c0,0-4.5,7.5-6,15.5v15.75c0,0-14.75-1.25-25.5,6.25c0,0-15.75,8-14,14.5c0,0-2,12.5,39,35c0,0,0.25,10.25,3.5,11.25      c0,0,2.5,3.25,10,2.25c0,0,1.5-0.75,2-3.5s0-4,0-4l9.5,1c0,0,41.25,8.5,65.75-14.5C410.25,983.75,439.25,962,412.25,925.5z       M319.875,979.5c0,0-25.125-7.625-34.5-22c0,0-1.5-7.375,34.625-9.625L319.875,979.5z M465.375,886.125      c-7.125-7.875-22.25-5.25-22.25-5.25c-25.25,5.5-26.625,24.375-26.625,24.375c-0.083,9.583,4.083,10.417,4.083,10.417      c-0.5,0.833-0.333,6.208-0.333,6.208c4.25,9.375,10,2.25,10,2.25c2.625,1.125,8.75,1.125,8.75,1.125      c16,0.875,29.625-15.25,29.625-15.25C479.125,900.25,465.375,886.125,465.375,886.125z M426.083,908.251      c-1.75-13.167,12.083-14.167,12.083-14.167L426.083,908.251z M464.25,902.167c0,0-4.667,8.75-19.833,10.5      c0,0-4.25,0.667-6.417-1.583l17.5-16.417C455.5,894.667,470.583,891.167,464.25,902.167z M433.5,989.5c0,0,6.167,5.5,9.667,0.333      S444,952.167,444,952.167c-0.5-18.5-6.667-17.667-6.667-17.667C431.833,935.167,431,953,431,953      C429.167,985.167,433.5,989.5,433.5,989.5z M501.75,946.5c0,0,19.75-5.5-0.75-12c0,0-27.75-4-40,2.5c0,0-10.5,4.5-11.25,15.25      c0,0-0.75,8,12.25,9.75l20.75,1.25c0,0,32,6,0.5,16c0,0-22.25,3.25-24.5-3.5c0,0-2.75-4.25,5.5-4.5c0,0,3-0.25,4.25,1.75      c0,0,8,4,11.75,4c0,0,11-2,11-6.25c0,0-1-4-15-5.25c0,0-14.75-1.5-18.5,1.75c0,0-9.75,8,0,15.75c0,0,8.25,9.25,24.75,9.25      c0,0,17.5,3.5,26-19.5c0,0,3.25-14.5-19.75-17.75c0,0-12.75-2-21.5-1.5c0,0-16.25-2.25,0-5.5c0,0,9.5-2,17.25-1.5      C484.5,946.5,495.5,947.25,501.75,946.5z M523.5,987.667c0.333-1,0.833-19.333,0.833-19.333      c-1.334-14.167,1.334-10.667,1.334-10.667c4.667,5.166,16.333,26.667,16.333,26.667c2.833,5.5,8.667,4.667,8.667,4.667      c12-0.833,10.666-26.167,10.666-26.167c-1.334-32.667-18-38.667-18-38.667c-4.5-0.834-1.5,10.167-1.5,10.167      c8.833,23.667,6.834,35.667,6.834,35.667c-0.333,4.834-2.167,0.166-2.167,0.166c-1.833-8.167-20-29.333-20-29.333      c-3.833-6.333-6.333-1.667-6.333-1.667c-11.667,14.167-7.667,47.167-7.667,47.167C518.167,998.834,523.5,987.667,523.5,987.667z       M578.125,945c0,0,0.309,1.63,0.125,3.375c-0.25,2.375-2.75,5.375-2.75,5.375c-4.375,2.125-6.375,3.625-6.375,3.625      c-2.125,0.375-0.25,7.375-0.25,7.375h2.75l-3.875,6.5c-4,6.5-1.125,13.25-1.125,13.25c0.5,4.875,10.125,9.625,10.125,9.625      c2,0.875,7.75,0.5,7.75,0.5c22.875-6.625,23.75-15,23.75-15c0.625-4.75-6.625-5-6.625-5l-7.75-0.25h-11.5l2.875-10.125l18,0.125      c6.375-2.25,1-10.5,1-10.5H588l1.375-6.875h18c8.875,0.125,8.75-3.125,8.75-3.125c-1-12.375-13.625-11.5-13.625-11.5      c-36.75,1.125-34.625,6.75-34.625,6.75C568.25,943.625,578.125,945,578.125,945z M659.833,939.667c0,0-14.334,1.5-34,33      c0,0-2.499,0.168-1.166-5.666c0,0,8.5-20.834,14-25.334c0,0,0.833-8.999-3.667-7.166c0,0-20.667,14.167-20.167,40.5      c0,0,0.666,9.333,3.5,11.333c0,0-8.166,12.667-10.166,44.5c0,0,0.334,12.667,10,14.167c0,0,0.832,0,1.666-4      c0,0,4.334-29.833,12.667-44.5c0,0,20.167,7,38-29C670.5,967.501,679.167,940.667,659.833,939.667z M639.125,981.75      c0,0,11.125-21,22.625-30C661.75,951.75,670.75,972.5,639.125,981.75z M667.167,911.833c7.666,0,8,2.667,8,2.667l29.5,79.833      l19.334-51l20.5,50.834l26-77.834c3-4.834,9.5-4.5,9.5-4.5v-2.666h-24.5v2.666c9.667,0.166,8.5,4.5,8.5,4.5L746.334,966.5      l-18.833-49.667c0.667-6.167,10.166-4.833,10.166-4.833v-2.833h-32.5V912c7.833-0.167,9.834,4.167,9.834,4.167L720.834,934      l-12.667,31.667l-18.5-48.834c-0.334-4.834,7.667-5.333,7.667-5.333v-2.333h-30.167V911.833z M793,933.75      c0,0-28.625-3.125-27.75,32.5c0,0-1.375,26.5,28,28c0,0,24.875-1.625,25.25-31.125C818.5,963.125,819.75,935.375,793,933.75z       M806.625,976.375c-2.875,12.75-13.375,13.125-13.375,13.125c-9.125-0.125-14.5-9.625-14.5-9.625      c-5-8.25-2.125-28.875-2.125-28.875c2-11.75,15.25-11.625,15.25-11.625C805.75,939,807,955.125,807,955.125      C808.5,960.625,806.625,976.375,806.625,976.375z M830.75,945.5v41c-3.5,4-9.625,3.5-9.625,3.5v2.125h27.5v-2.375      c-8.875,0.25-10.5-2.75-10.5-2.75v-34.75c0-2,7-8.25,7-8.25c3.25-3.375,5-1.75,5-1.75c1.375,4.375,5.75,4.125,5.75,4.125      c5.375,0,5.125-5.125,5.125-5.125c1.5-9.75-8.75-7.125-8.75-7.125c-6.5,0.875-13,8.875-13.125,8.875s0-8.625,0-8.625l-16.375,6.75      C829.25,942,830.75,945.5,830.75,945.5z M868.625,914.125V987c-6.5,3.75-10.25,2.75-10.25,2.75v2.5h27.5v-2.5      c-5.5,0-6.875-2.875-6.875-2.875v-80.25h-5.25l-15.25,5.125l0.125,2.125L868.625,914.125z M936,982v-72.75l-1.875-2.625h-2.5      L916.5,911.5l0.125,2.875h7V939.5c-7.875-10.25-24.25-1.75-24.25-1.75c-12.625,6.375-11.625,26.875-11.625,26.875      c0,24,8.75,27.625,21.375,27.625s14.75-4.875,14.75-4.875V992c10.25-0.75,20.25-5,20.25-5v-2.5C936.375,984.625,936,982,936,982z       M923.75,979.625c0,0-4.75,7.375-10.25,7.375c0,0-15.75,1.125-15.75-24.625c0,0-1.625-21.75,14.5-23.25c0,0,8.125-0.75,11.5,6.75      V979.625z M959,975.5c-5.246,0-9.5,4.254-9.5,9.5s4.254,9.5,9.5,9.5s9.5-4.254,9.5-9.5S964.246,975.5,959,975.5z M959,992.531      c-4.158,0-7.531-3.373-7.531-7.531s3.373-7.531,7.531-7.531s7.531,3.373,7.531,7.531S963.158,992.531,959,992.531z       M956.082,989.439h1.315v-4.415h1.24c1.194,0.045,1.738,0.574,2.041,1.98c0.287,1.271,0.515,2.147,0.681,2.435h1.36      c-0.211-0.394-0.453-1.376-0.786-2.798c-0.241-1.059-0.711-1.784-1.497-2.056v-0.046c1.074-0.363,1.921-1.255,1.921-2.601      c0-0.786-0.287-1.482-0.802-1.936c-0.635-0.575-1.542-0.832-2.948-0.832c-0.907,0-1.86,0.076-2.525,0.212V989.439z       M957.397,980.306c0.212-0.06,0.665-0.12,1.301-0.12c1.391,0.015,2.344,0.589,2.344,1.905c0,1.164-0.893,1.936-2.299,1.936h-1.346      V980.306z M115.5,862c0,0-9-1.5-2,2.5c0,0,22.5,29,20.5,57.5c0,0-3.5,60-37.5,62.5c0,0-10.333,1.501-16.5-6.999      c0,0,24.834-14,26.167-41.667c0,0,2.5-24.333-13.333-27.833c0,0-24.833-3.334-32.167,30.666c0,0-3.833,26.001,5,38.167      c0,0-12.667,7.916-20.292-7.834c0,0-3.75-7.125-2.5-24.625c0,0,1.375-34.875,31.875-66.625c0,0,5.25-5.25-3.75-3.75      c0,0-44.25,26.25-44.25,74.25c0,0-2.5,36,28.25,39.25c0,0,9.5-1.5,12.5-4.5c0,0,11,17,27,17.5c0,0,34,2.5,51-44.5      C145.5,956,168,893.5,115.5,862z M88,916.834c4.667,0.5,3.5,14.167,3.5,14.167c-2.667,21.333-13,32-13,32      C74.667,921.501,88,916.834,88,916.834z"
    );

    // this.p = new Path2D(
    //   "M377.968,203.521c0.161-11.019,0.096-12.393,0-23.585 c-0.044-5.164-2.931,1.823-3.076-10.255c-0.026-2.502,0.987-2.284,3.076-2.051c1.612-1.378,0.355-3.124-1.025-3.076 c-3.245,0.11-7.307-1.354-9.228-4.102c0.888-7.339,5.83-12.79,8.202-22.56c6.858-22.373,11.366-49.242,12.303-74.859 c1.153-0.117,5.19,0.15,6.151,0c4.143,0.683,11.076,8.225,13.329,7.178c-0.555,1.025-1.111,1.538-1.025,3.076 c-0.684,0.342-3.386-0.182-7.177,0c-3.225-3.578-7.38-3.312-9.228-3.076c0.161,2.499,0.246,2.861,1.025,6.153 c3.847,30.305,9.986,58.113,20.505,83.063c-2.231,2.521-4.663,5.037-9.228,5.127c-2.15,0.042-2.377,1-2.051,3.076 c5.512,0.201,3.867-1.436,4.102,7.178c-0.718,2.861-4.081,2.4-4.102,6.153c-0.044,8.127-0.077,8.617,0,24.611 c0.059,3.068-0.104,3.907,0.48,3.808c0.425-0.072,1.43-3.825,1.57-3.808c3.34-10.383,4.565-17.621,6.151-26.662 c0.342,0,0.684,0,1.025,0c5.367-0.729,9.473,5.153,14.354,6.153c-0.341,0.684-1.044,1.006-1.025,2.051 c-1.354,0.238-1.928-0.29-3.076,0c-3.727-0.2-6.636-3.135-9.228-3.077c0,1.025-0.419,2.231,1.161,9.246 c3.875,16.842,7.452,19.423,13.193,30.747c1.045,0.69,1.935-0.116,2.051-1.025c1.211-4.17,2.246-8.261,3.076-11.28 c1.864-6.778,3.363-9.594,4.101-15.382c0.586-4.6,2.226-5.022,3.356-0.257c2.21,16.391,11.384,34.659,14.073,40.25 c4.868,10.121,8.33,12.433,9.228,17.433c-2.561,2.803-5.059,4.044-7.177,4.102c-2.65,0.072-3.39,0.417-3.076,2.051 c4.19,1.894,3.873,1.277,4.101,7.178c-0.764,4.125-5.186,4.246-5.126,7.179c0.074,3.656-0.119,6.32,0,12.305 c7.137,1.218,10.878,4.26,12.303,11.28c-1.025,0-2.051,0-3.076,0c-5.319-3.48-12.306-6.822-19.479-3.077 c-0.78,0.269,0.342,0.684,1.025,1.026c7.688,1.421,22.929,10.645,23.581,20.509c6.844-1.406,9.046-5.012,25.632-3.077 c7.967,4.309,6.265,8.838,6.151,17.433c26.293-7.195,81.841-16.696,87.147,10.254c1.081,5.491,1.778,12.962-2.051,17.433 c-3.722,0.144-8.417-0.079-13.328,0c0-0.682,0-0.344,0-1.025c0-0.002,0-1.024,0-1.025c-0.438-0.214-0.94,0.149-1.025-1.026 c-0.242-8.226,7.403-8.879,5.126-17.433c-7.564-15.435-42.559-7.675-50.238-5.127c-17.643,5.853-29.217,11.361-32.808,6.153 c-2.946-5.063,4.583-10.837-3.076-15.382c-3.964-2.86-10.781-2.996-17.43-2.051c-2.525,2.641,3.571,5.108,0,9.229 c-0.342,0-0.684,0-1.025,0c-2.923-0.11-4.042-1.069-4.101-2.051c-1.426-23.9-31.515-38.985-53.313-22.56 c-10.47,7.89-8.449,17.58-18.455,21.535c-1.346-0.213-1.987-0.363-3.076-1.025c-1.495-1.751-1.29-4.318-1.025-7.178 c6.365-13.025,13.058-19.612,27.682-23.585c-0.844-0.865-1.399-1.506-2.05-2.051c-6.081-5.431-13.704-9.882-23.582-11.28 c-30.634-4.336-53.076,31.847-44.086,51.273c-1.367,0-4.065,0.503-6.152-1.025c-15.043-15.599-24.49-30.537-46.137-35.891 c-35.855-8.869-64.85,19.101-55.309,49.427c14.021,13.544,17.013,4.987,24.551,4.922c3.631,1.367,4.222,3.157,4.101,5.127 c-1.025,1.708-2.051,3.418-3.076,5.127c-32.867,14.159-49.679-24.43-30.758-50.248c25.734-35.116,81.25-26.905,104.577,8.204 c0.988,1.146,0.99-0.264,1.025-1.025c10.01-49.057,52.746-48.134,73.819-31.79c-7.121-23.126-28.133-19.83-37.935-18.458 c-1.176,0.165-11.092-14.329-31.783-4.102c-0.152-8.556-0.367-12.535,1.025-18.458c-2.392,0.684-4.785,1.368-7.177,2.051 c0.552,1.61-0.833,3.566,1.025,4.102c0.868,0.25,2.99,0.903,3.076,2.051c0.273,3.661,0.658,5.952-1.025,8.204 c-0.856,1.146-2.506,2.489-3.076,3.076c-2.681,2.766,3.901,12.824-11.278,21.535c-3.932-1.674-3.542-9.967-15.379-11.28 c-1.708-1.484-1.048-5.115-1.025-8.204c0.021-2.798-4.34-4.009-5.126-7.178c-0.343-1.379,0.125-5.207,0-7.178 c3.936-1.06,4.025-0.29,4.101-5.127c-4.813-0.609-7.599-1.504-10.253-4.102c0.12-5.55,5.458-6.779,13.329-23.585 c5.56-12.884,8.349-29.698,10.252-43.07c2.142-0.5,4.618-0.417,7.177,0c3.759,2.393,7.519,4.786,11.278,7.178 c-1.025,0.684-2.05,1.368-3.076,2.051c-6.582,0.846-11.37-4.961-13.328-3.077c0,0.342,0,0.684,0,1.025 c5.265,18.458,9.61,43.292,22.556,54.35c1.367-8.203,2.734-16.408,4.101-24.611c0.342,0,0.684,0,1.025,0 c0.683,1.708,1.367,3.418,2.05,5.127c0.684-5.126,1.367-10.255,2.05-15.382C362.247,203.521,370.108,203.521,377.968,203.521z  M335.932,285.558c1.025,0,2.051,0,3.076,0c-2.05,3.418-4.101,6.837-6.151,10.255c2.05,2.392,4.101,4.786,6.151,7.178 c-1.025,0.342-2.05,0.684-3.076,1.025c-4.834-1.515-7.802-2.809-11.278-5.127c0.715-6.464,2.295-6.479,5.126-10.254 C331.831,287.609,333.882,286.583,335.932,285.558z M453.837,355.289c3.759,0,7.519,0,11.278,0c0,0.342,0,0.684,0,1.026 c-2.05,0.683-4.101,1.367-6.152,2.051C457.255,357.34,455.546,356.314,453.837,355.289z M98.072,431.173 c25.397-0.857,47.037,2.938,54.339,20.509c-2.336,5.947-4.558,9.723-10.253,12.306c-3.417,0-6.835,0-10.253,0 c0-0.342,0-0.684,0-1.025c2.899-3.758,7.303-5.858,7.177-10.254c-13.783-5.296-28.077-7.482-41.01-7.179c0,13.672,0,27.347,0,41.019 c32.609,6.102,83.713-1.229,77.92-37.942c-6.374-40.388-73.317-70.179-116.88-73.833c-11.558-0.97-32.729-2.638-37.935,2.051 c0,0.342,0,0.684,0,1.026c2.124,0.183,4.592,0.372,7.169,2.953c0.151,1.049-0.838,1.329-1.018,2.174 c-4.2,0.063-9.775,0.772-13.328-1.025c0-1.367,0-2.734,0-4.102c4.14-16.845,37.82-18.46,61.516-14.357 c44.525,7.711,85.865,26.07,109.703,63.579c29.61,46.59-26.109,87.316-87.147,71.782c-0.793,7.451-3.319,9.111-11.278,9.229 c-5.073-5.05-4.41-10.672-5.126-15.382c-0.284-1.871-39.48-16.334-42.036-39.993c7.684-14.447,25.046-15.342,42.036-20.509 c0.555-10.594,0.939-27.97,7.177-31.79c4.093,0.383,4.365,2.454,6.152,6.153C96.021,414.765,97.046,422.971,98.072,431.173z M220.078,373.748c9.653,0.651,14.13,4.314,14.354,6.153c0.079,0.645,0.121,0.941,1.025,1.025 c20.04,1.864,11.576,23.11-10.252,35.891c-5.709,3.346-14.75,7.064-25.632,2.051c-0.783-0.361-2.284,4.392-5.126,5.127 c-3.041-0.082-3.553-0.486-4.101-2.051c-1.688-0.886-0.894-8.768-1.155-8.986C170.579,397.454,203.663,374.159,220.078,373.748z M206.749,387.079c-6.814,4.229-12.431,6.02-13.328,16.407c1.878-0.435,9.467-12.077,15.372-15.36 C209.492,387.737,208.303,386.917,206.749,387.079z M228.28,388.104c-10.138,5.64-17.964,11.11-23.581,21.535 c10.472,0.826,27.2-4.754,32.809-15.382c-0.173-3.629-0.64-3.811-3.076-5.127C232.381,388.029,230.38,387.838,228.28,388.104z M670.167,399.384c1.025,0,2.051,0,3.076,0c0.017,22.653-0.14,83.604,0,84.088c0.382,1.317,2.525,2.625,3.076,3.077 c2.481,1.55,5.507,0.755,6.151,1.025c0,0.342,0,2.734,0,3.076c-9.91,0-19.823,0-29.732,0c0-0.342,0-2.734,0-3.076 c-0.051-0.638,10.103,0.436,10.252-7.178c0.02-6.812-0.421-65.327-0.459-67.254c-0.035-1.723-2.114-5.055-3.642-5.554 c-1.718-0.666-3.968-0.466-6.151,0c0-0.342,0-1.709,0-2.051C658.547,403.145,664.358,401.777,670.167,399.384z M732.708,399.384 c-0.083,18.412-0.057,72.697,0,78.96c0.044,4.844,5.399,3.954,9.228,4.102c0.171,0.138,0.004,1.964-0.178,2.161 c-7.518,2.91-13.229,5.44-19.062,7.365c-0.241-3.715-0.241-6.108-0.241-8.5c-11.261,14.411-33.269,11.097-39.985-15.382 c-6.297-24.828,22.282-51.704,39.985-33.84c0.104-6.51,0.033-22.76,0-23.586c-0.038-0.929-1.663-2.69-2.051-3.076 c-1.522-0.217-5.57,0.114-7.177,0c-0.199-0.014-0.091-1.863,0-2.051C719.161,403.636,726.776,400.916,732.708,399.384z M451.787,402.46c10.792-0.018,20.821-0.027,30.758,0c0,0.342,0,1.709,0,2.051c-4.833,0.12-6.006,0.672-8.202,4.102 c2.688,13.93,14.74,43.591,19.48,55.375c0.479-0.683,0.817-1.419,1.025-2.051c5.247-14.371,10.342-25.48,12.303-34.866 c0.073-0.347-0.914-3.066-2.05-6.153c-4.736-12.865-6.252-16.218-14.354-16.407c-0.206-0.005,0.047-1.851,0-2.051 c11.121-0.023,22.453-0.081,33.834,0c0,0.342,0,1.709,0,2.051c-2.451-0.254-6.308,0.377-9.228,2.051 c-1.24,5.125,11.528,38.015,19.48,57.426c0.342,0,0.684,0,1.025,0c3.278-15.345,18.09-48.962,16.404-55.375 c-1.158-3.67-6.353-4.058-8.202-4.102c-0.188-0.005-0.184-1.848,0-2.051c7.838-0.011,17.152-0.053,25.631,0 c0.122,0.183,0.232,2.025,0,2.051c-2.248,0.247-5.394,1.144-7.177,4.102c-9.565,15.868-20.525,64.385-29.733,83.063 c-0.341,0-1.708,0-2.05,0c-6.493-18.115-12.987-36.235-19.48-54.35c-0.684,0.342-1.367,0.684-2.05,1.025 c-1.186,7.273-13.917,42.456-17.195,52.822c-0.421,1.333-2.216,1.077-3.31,0.502c-14.762-40.465-23.948-83.941-33.833-86.139 c-1.881-0.418-2.873-0.79-2.977-1.007C451.8,403.982,451.713,402.963,451.787,402.46z M317.478,419.894 c13.896,1.798,27.246,35.177,18.455,59.477c-2.856,4.271-8.008,10.607-14.354,8.204c-11.28-6.227-13.554-25.088-22.556-33.84 c0.273,12.915,0.656,28.631-4.101,36.917c-2.392,0.794-4.379,0.696-7.177-1.025c-8.181-5.827-0.951-60.222,10.252-55.375 c6.641,2.772,10.464,11.832,26.657,34.866c0.342,0,0.684,0,1.025,0C324.908,448.102,313.385,423.157,317.478,419.894z M415.902,428.097c0.684,0,1.367,0,2.051,0c-0.977,15.235-14.856,28.458-13.328,39.993c1.025-0.684,3.674-4.205,4.101-5.127 c5.943-8.43,25.06-33.235,35.884-28.713c22.72,14.393,4.05,45.225-11.278,54.35c-7.518,2.051-15.038,4.102-22.556,6.153 c-4.459,16.628-8.801,32.423-12.303,50.248c-5.085-0.12-7.493-2.262-11.278-6.153c-7.024-10.353,6.642-50.496,10.252-56.4 c-1.982-5.554-4.205-10.255-3.076-16.408C395.636,449.625,406.629,437.02,415.902,428.097z M250.835,429.123 c12.592-0.391,27.845-0.513,32.809,5.127c0,0.342,0,0.684,0,1.025c-0.29,2.732-1.776,4.428-5.126,5.127 c-21.958,3.118-36.726,3.307-47.162,6.153c-0.747,0.593-0.314,1.458,1.025,2.051c18.308,1.868,38.548,2.492,45.111,9.229 c6.365,6.242,7.447,16.692-1.025,26.662c-13.025,9.908-38.65,12.658-53.313-8.204c-0.293-2.181-0.384-3.379,0-6.153 c0.26-2.383,1.673-3.929,3.076-5.127c3.521-4.296,21.051-5.278,36.91,1.025c1.696,0.902,3.773,2.058,1.025,4.102 c-0.813,0.426-0.612,0.354-3.076,2.051c-13.472,9.027-21.376-9.326-32.808,0c-0.212,0.898-0.16,2.305,1.025,3.077 c0.813,0.596,0.935,0.593,2.05,1.025c17.242,3.193,38.536-2.74,39.985-7.178c0.133-2.114,0.447-5.09-16.404-9.229 c-1.825-0.766-13.146-1.066-22.556-1.026c-7.691,0.033-16.712-3.331-11.278-17.433C224.28,437.94,231.683,430.582,250.835,429.123z M576.869,429.123c43.807-3.285,41.993,55.542,13.329,62.553C553.17,500.733,539.508,439.809,576.869,429.123z M630.183,429.123 c1.101-0.437,2.055-0.313,2.05,0c-0.041,2.911-0.081,9.69,0,11.28c2.502-5.622,9.08-10.896,13.329-11.28 c6.413-0.562,6.623,1.618,8.335,3.227c2.078,5.118-0.215,7.852-1.158,9.079c-1.005,1.001-1.918,1.035-3.076,1.025 c-6.674,0.652-6.237-5.106-11.278-4.102c-2.43,1.876-6.091,4.69-6.151,9.229c-0.024,1.816-0.051,32.027,0,34.866 c1.526,1.699,2.588,3.473,4.101,4.102c1.371,0.57,5.104,0.746,7.177,1.025c0.306,0.041,0.33,3,0,3.076c-9.568,0-20.165,0-29.732,0 c-0.828,0.019-1.439-0.179-2.051-1.025c0-0.342,0-0.684,0-1.025c0.551-2.377,5.863-0.137,9.228-4.102 c0.133-6.756-0.056-15.403,0-24.611c0.049-8.091,1.275-19.578-2.051-21.535c-2.096-0.915-5.118-0.34-6.151,0 c-0.094,0.031-0.551-1.83,0-2.051C618.562,433.566,624.373,431.857,630.183,429.123z M368.741,430.148 c8.494-0.895,15.086-2.035,19.48,0c3.108,1.986,5.126,4.867,6.151,7.178c1.658,3.47,1.226,4.598-3.076,6.153 c-7.42,1.921-21.222,0.667-24.606,1.025c-0.683,3.076-1.367,6.153-2.05,9.229c7.303-0.274,18.232-1.725,19.48,2.051 c0,0.342,0,0.684,0,1.025c-0.011,1.506,0.363,5.416-2.051,6.153c-2.438,0.669-19.498,1.924-21.53,3.076 c-2.237,1.268-3.061,5.892-4.101,10.255c2.392,0,5.425-0.449,7.177-1.025c4.945-1.29,22.256-4.823,22.597,2.47 c-0.179,2.815,0.551,4.056-2.091,5.733c-11.954,6.936-19.807,13.926-34.859,10.254c-11.799-9.986-8.464-20.579-3.076-30.764 c0.021-0.041,0.17-2.011-1.025-2.051c-0.183-0.006-0.514-2.549,0-4.102c1.061-3.206,4.874-1.528,5.126-2.051 c1.696-3.511,3.601-9.128,4.101-11.28c-6.109-1.881-11.632-0.594-10.252-9.229C353.052,431.776,360.539,430.864,368.741,430.148z M203.673,431.173c1.025,0,2.051,0,3.076,0c1.367,1.025,2.734,2.051,4.101,3.077c3.104,14.144,4.517,55.003,2.051,57.426 c-2.871,1.374-5.651,1.254-8.202,1.025c-1.265-0.775-2.987-2.279-4.101-5.127C197.708,472.509,200.18,444.566,203.673,431.173z M575.844,434.25c-2.771,0.866-7.193,4.629-9.228,11.28c-2.825,9.234,0.681,26.071,3.076,30.764c2.918,5.72,4.743,8.786,9.228,11.28 c3.749,1.089,4.588,1.154,8.202,1.025c2.865-1.164,4.233-1.855,6.151-4.102c2.533-3.766,3.183-4.786,4.101-9.229 c3.003-14.54,0.699-34.886-10.252-41.019C583.841,432.748,576.805,432.75,575.844,434.25z M704.001,433.225 c-10.174,4.738-16.458,39.328,0.988,49.259c2.442,1.297,5.192,1.886,9.265,2.014c3.202-1.521,5.535-3.577,8.202-6.153 c0.097-11.299-0.009-33.138,0-35.891c-1.457-3.851-5.719-8.257-8.202-9.229C711.129,432.419,707.931,432.419,704.001,433.225z M443.584,445.53c-8.052,10.685-17.072,19.028-23.581,31.79c1.708,0,3.417,0,5.126,0C432.902,474.037,454.781,459.19,443.584,445.53 z M81.667,446.556c-14.042-0.478-31.392,1.743-37.935,9.229c0.683,0.684,1.367,1.367,2.051,2.051 c5.335,11.268,21.675,19.193,34.859,22.561C80.984,469.117,80.439,458.277,81.667,446.556z"
    // );

    this.pathWidth = 1058;
    this.pathHeight = 988;

    this.pathPos = {
      scale: 0,
      x: 0,
      y: 0,
    };

    this.boxes = [];
    this.numBoxes = 20;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.fireworks = [];

    this.particleCnt = 25;
    this.particles = [];

    this.stars = [];
    this.starsCnt = 150;

    window.addEventListener("pointerup", this.onUp.bind(this), false);
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
    this.createStars();
  }

  explode(x, y) {
    for (let i = 0; i < this.particleCnt; i++) {
      const color = FIREWORK_COLORS[0];
      let light = Boolean;

      if (i % 5 == 0) {
        light = true;
      } else {
        light = false;
      }
      this.particles.push(new Particle(x, y, color, light));
    }
  }

  createBoxes() {
    this.boxes = [];
    let y = 0;
    for (let i = 0; i < this.numBoxes; i++) {
      if (i % 2 == 0) {
        y = (Math.random() * this.stageHeight) / 2;
      } else {
        y = (Math.random() * this.stageHeight) / 2 + this.stageHeight / 2;
      }

      const gradientBox = new GradientBox(y);
      this.boxes.push(gradientBox);
    }
  }

  createStars() {
    this.stars = [];
    let x, y;
    for (let i = 0; i < this.starsCnt; i++) {
      x = Math.random() * this.stageWidth;
      y = Math.random() * this.stageHeight;

      const star = new Star(x, y);
      this.stars.push(star);
    }
  }

  drawPath() {
    if (this.pathWidth > this.stageWidth) {
      this.pathPos.scale = (this.stageWidth * 0.8) / this.pathWidth;
      this.pathPos.x =
        (this.stageWidth - this.pathWidth * this.pathPos.scale) / 2;
      this.pathPos.y =
        (this.stageHeight - this.pathHeight * this.pathPos.scale) * 0.8;
    } else {
      this.pathPos.scale = 0.5;
      this.pathPos.x =
        (this.stageWidth - this.pathWidth * this.pathPos.scale) / 2;
      this.pathPos.y =
        (this.stageHeight - this.pathHeight * this.pathPos.scale) * 0.8;
    }

    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 10 * this.pathPos.scale;

    this.ctx.translate(this.pathPos.x, this.pathPos.y);
    this.ctx.scale(this.pathPos.scale, this.pathPos.scale);

    this.ctx.clip(this.p);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      star.draw(this.ctx);
    }

    this.ctx.save();
    this.drawPath();

    let curColor = 0;

    let fired = {};

    let vanished = false;

    for (let i = 0; i < this.boxes.length; i++) {
      const color = COLORS[curColor];

      this.boxes[i].draw(
        this.ctx,
        color,
        this.stageWidth,
        this.stageHeight,
        this.pathPos.x,
        this.pathPos.y,
        this.pathPos.scale
      );

      curColor++;

      if (curColor >= COLORS.length) curColor = 0;
    }
    this.ctx.restore();

    for (let i = 0; i < this.fireworks.length; i++) {
      const firework = this.fireworks[i];
      fired = firework.draw(this.ctx);
      if (fired.isExploded) {
        this.fireworks.splice(i, 1);
        this.explode(fired.x, fired.y);
      }
    }

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      vanished = particle.draw(this.ctx);

      if (vanished) {
        this.particles.splice(i, 1);
      }
    }
  }

  onUp(e) {
    let cx = e.clientX;
    let cy = e.clientY;

    this.fireworks.push(
      new Firework(cx, cy, this.stageWidth, this.stageHeight)
    );
  }
}

window.onload = () => {
  new App();
};
