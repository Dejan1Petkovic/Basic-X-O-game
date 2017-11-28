var wrap = document.getElementsByClassName('wrap')[0];
var winner = document.getElementById('winner');
var xo = 'O';
createTable();

var cube = document.getElementsByClassName('cube');
var combinations = [
  [cube[0], cube[1], cube[2]],
  [cube[3], cube[4], cube[5]],
  [cube[6], cube[7], cube[8]],
  [cube[0], cube[3], cube[6]],
  [cube[1], cube[4], cube[7]],
  [cube[2], cube[5], cube[8]],
  [cube[0], cube[4], cube[8]],
  [cube[2], cube[4], cube[6]],
]
for (var i = 0; i < cube.length; i++) {
  cube[i].addEventListener('click', insertSymbol);
}

function createTable() {
  var text = "";
  for (var i = 0; i < 9; i++) {
    text += '<div class="cube"></div>'
  }
  wrap.innerHTML = text;
}

function insertSymbol() {
  this.removeEventListener('click', insertSymbol)
  if ((xo == 'X') ? xo = 'O' : xo = 'X') {
    this.innerHTML = xo;
  } else {
    this.innerHTML = xo;
  }
  checkWinner();
}

function checkWinner() {
  for (var i = 0; i < combinations.length; i++) {
    var cube1Val = combinations[i][0].innerHTML;
    var cube2Val = combinations[i][1].innerHTML;
    var cube3Val = combinations[i][2].innerHTML;
    if (cube1Val == cube2Val && cube1Val == cube3Val && cube1Val != "") {
      removeKliks();
      combinations[i][0].style.background = "tomato";
      combinations[i][1].style.background = "tomato";
      combinations[i][2].style.background = "tomato";
      var sybol = combinations[i][0].innerHTML;
      playAgain(sybol);
    }
  }
}

function removeKliks() {
  for (var i = 0; i < cube.length; i++) {
    cube[i].removeEventListener('click', insertSymbol)
  }
}

function playAgain(sybol) {
  winner.innerHTML += "<h1>Winner is " + sybol + "</h1>"
  setTimeout(function () {
    var again = confirm('Would you like to play again?');
    if (again) {
      location.reload()
    }
  },1500);
}
