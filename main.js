var boxes = document.querySelectorAll(".box");
var s = document.querySelector('.rgbColor');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status")
statusText.textContent = "Make your choice XD";


easyBtn.addEventListener("click", function() {

    document.querySelector("h1").style.background = "rgb(216, 112, 147)";

    statusText.textContent = "Make your choice XD";

    boxCount = 3;
    this.style.background = "rgb(216, 112, 147)"
    this.style.color = "azure"
    hardBtn.style.background = "white";
    hardBtn.style.color = "rgb(216, 112, 147)";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(216, 112, 147)";

    statusText.textContent = "Make your choice XD";

    this.style.background = "rgb(216, 112, 147)"
    this.style.color = "azure"
    easyBtn.style.background = "white";
    easyBtn.style.color = "rgb(216, 112, 147)";

    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    console.log(boxes.length)
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

    }
});


playbtn.addEventListener("click", function() {
    document.querySelector("h1").style.background = "rgb(233, 119, 119)";

    statusText.textContent = "Make your choice XD";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});


for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        var selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if (selectedColor === pickedColor) {
            win();

        } else {
            lose(this);
        }
    });
}


function win() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    document.querySelector("h1").style.background = pickedColor;

    statusText.textContent = "Correct! Woooooo!! XD";
}


function lose(a) {
    console.log(a);
    a.style.background = "none"
    statusText.textContent = "Awww nope, try again :3";
}


function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}