// Simple animated chart using canvas
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 200;

let bars = [50, 80, 40, 90, 60, 110];
let progress = 0;

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bars.forEach((value, i) => {
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(i * 70 + 20, canvas.height - value * progress, 40, value * progress);
  });

  if (progress < 1) {
    progress += 0.02;
    requestAnimationFrame(drawChart);
  }
}

drawChart();
