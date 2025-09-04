let boxes = [
  {id: 'boxA', count: 0},
  {id: 'boxB', count: 0},
  {id: 'boxC', count: 0},
  {id: 'boxD', count: 0}
];

window.onload = function() {
  document.getElementById('startBtn').onclick = initGame;
  document.getElementById('choice1Btn').onclick = choice1;
  document.getElementById('choice2Btn').onclick = choice2;
  document.getElementById('choice3Btn').onclick = choice3;

  initGame(); // Initialize on load
};

function initGame() {
  let initial = parseInt(document.getElementById('initialBalls').value) || 1;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].count = initial * Math.pow(2, i);
  }
  renderBoxes();
}

function renderBoxes() {
  boxes.forEach(box => {
    const div = document.getElementById(box.id);
    div.innerHTML = `<strong>${box.id.slice(-1)}: ${box.count}</strong>`;
  });
}

// Choice 1: Double balls
function choice1() {
  boxes.forEach(box => box.count *= 2);
  renderBoxes();
}

// Choice 2: Shift consecutive to last box
function choice2() {
  for (let i = 0; i < boxes.length - 1; i++) {
    boxes[boxes.length - 1].count += boxes[i].count;
    boxes[i].count = 0;
  }
  renderBoxes();
}

// Choice 3: Odd boxes into even boxes
function choice3() {
  for (let i = 0; i < boxes.length; i++) {
    if ((i+1) % 2 !== 0 && i+1 < boxes.length) {
      boxes[i+1].count += boxes[i].count;
      boxes[i].count = 0;
    }
  }
  renderBoxes();
}
