// -------------------- Constants -------------------------

balls = document.querySelectorAll("div.ball")


// ---------------------Variables -------------------------

ballObjects = [
  {id:"1", weight: 1, active: false },
  {id:"2", weight: 1, active: false },
  {id:"3", weight: 1, active: false },
  {id:"4", weight: 1, active: false },
  {id:"5", weight: 1, active: false },
  {id:"6", weight: 1, active: false },
  {id:"7", weight: 1, active: false },
  {id:"8", weight: 1, active: false },
  {id:"9", weight: 1, active: false },
  {id:"10", weight: 1, active: false },
  {id:"11", weight: 1, active: false },
  {id:"12", weight: 1, active: false }
]


makeBallsDraggable(balls)

function makeBallsDraggable(balls) {
  balls.forEach((ball) => {
    dragElement(ball)
  })
}

function dragElement(elmnt) {
  console.log(elmnt)
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "title")) {
    document.getElementById(elmnt.id + "title").onmousedown = dragMouseDown; 
  } else {
    elmnt.onmousedown = dragMouseDown;
  }


function dragMouseDown(e) {
  e = e || window.event;
  console.log("we're dragging!")
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  trackActiveBall(e.target.id)
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
  }
}

function trackActiveBall(ballId) {
  let activeBall = ballObjects.find(ball => ball.id === ballId.match(/(\d+)/)[0]);
    activeBall.active = true
  console.log(activeBall.active)
}