docStyles = window.getComputedStyle(document.querySelector("html")); // uses "querySelect" function above to dump the stlyes from HTML element "html" (ie all styles) into "stylesValue"
docColors = {
  bg_main: docStyles.getPropertyValue("--color-bg-main"),
  bg_highlight: docStyles.getPropertyValue("--color-bg-main"),
  font_main: docStyles.getPropertyValue("--color-bg-main"),
  font_link: docStyles.getPropertyValue("--color-bg-main"),
  font_link_hover: docStyles.getPropertyValue("--color-bg-main"),
  font_link_visited: docStyles.getPropertyValue("--color-bg-main")
}

const container = document.getElementById('container')
const canvasList = []

const fallbackContent = document.createElement('p')
fallbackContent.innerText = "Fallback Content goes Here! Any browsers that don't support canvas will render this text"

function makeCanvas(header) {
  new_canvas = document.createElement('canvas')
  new_canvas.id = `canvas_${canvasList.length}`
  new_canvas.width = 800
  new_canvas.height = 300
  
  canvasList.push(new_canvas)
  appendCanvas(canvasList[canvasList.length-1], header)
}

function appendCanvas(canvas, header) {
  container.appendChild(document.createElement('br'))

  headerElement = document.createElement('h2')
  headerElement.innerText = `Canvas ${canvasList.length}: "${header}"`
  container.appendChild(headerElement)

  container.appendChild(new_canvas)
  new_canvas.appendChild(fallbackContent)
}



// ---------------------------------------------- Canvas 1
function draw0(canvas) {
  context = canvas.getContext('2d')
  context.fillStyle = docColors.bg_highlight
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'rgb(200, 0, 0)'
  context.fillRect(50, 50, 200, 200)
  
  context.fillStyle = 'rgba(0, 0, 200, 0.5)'
  context.fillRect(100, 75, 300, 150)

  context.clearRect(75, 100, 300, 100)

  context.strokeRect(100, 125, 250, 50)
}
makeCanvas('2 Boxes in Boxes')
draw0(canvasList[0])

// ---------------------------------------------- Canvas 2
function draw1(canvas) {
  context = canvas.getContext('2d')
  context.fillStyle = docColors.bg_highlight
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'rgb(200, 0, 0)'
  context.fillRect(50, 50, 200, 200)
  
  context.fillStyle = 'rgba(0, 0, 200, 0.5)'
  context.fillRect(100, 75, 300, 150)
}
makeCanvas('Next!')
draw1(canvasList[1])

