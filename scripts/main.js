const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext('2d')

function draw() {
  canvasContext.fillStyle = 'rgb(200, 0, 0)';
  canvasContext.fillRect(50, 50, 200, 200);
  
  canvasContext.fillStyle = 'rgba(0, 0, 200, 0.5)';
  canvasContext.fillRect(100, 75, 300, 150);
}

draw()