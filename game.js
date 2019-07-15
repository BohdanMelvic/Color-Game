var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

colorDisplay.textContent = pickedColor;

for (var i  = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener('click', function() {
      var clickedColor = this.style.background;
      
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = 'Win!';
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = 'Play again?'
      } else {
        this.style.background = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
}

function changeColors(color) {
    for(var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor( Math.random() * colors.length );
    return colors[random];
}

function generateRandomColors(n) {
    var arr = [];
    for (var i  = 0; i < n; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor( Math.random() * 256 );
    var g = Math.floor( Math.random() * 256 );
    var b = Math.floor( Math.random() * 256 );
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

resetButton.addEventListener('click', function() {
    colors = generateRandomColors(numberSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    for (var i  = 0; i < 3; i++) {
        squares[i].style.background = colors[i];
    };
    h1.style.background = 'steelblue'
});

easyBtn.addEventListener('click', function() {
    numberSquare = 3;
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i  = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    };
});

hardBtn.addEventListener('click', function() {
    numberSquare = 6;
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i  = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
});