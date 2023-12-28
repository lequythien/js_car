var isStart = false;
function start() {
    var domRed = document.getElementById('red');
    var domYellow = document.getElementById('yellow');
    var domGreen = document.getElementById('green');

    setTimeout(function () {
        domRed.style.backgroundColor = 'red'; // Đổi màu đỏ thành màu đỏ
        kiemtra = false;
    }, 6700);

    setTimeout(function () {
        domYellow.style.backgroundColor = 'yellow'; // Đổi màu vàng thành màu yellow
        kiemtra = false;
    }, 7700);

    setTimeout(function () {
        domGreen.style.backgroundColor = 'green'; // Đổi màu xanh thành màu greeen
        isStart = true;

        // Play sound effect for car 1
        var car1Sound = document.getElementById("car1Sound");
        car1Sound.play();

        // Play sound effect for car 2
        var car2Sound = document.getElementById("car2Sound");
        car2Sound.play();
    }, 9000);
}

var a = 0;
var b = 0;
var x1 = 148;
var x2 = 148;

document.addEventListener("keydown", function (even) {
    domCar1 = document.getElementById('car1');
    domCar2 = document.getElementById('car2');
    domX1 = document.getElementById('xang1');
    domX2 = document.getElementById('xang2');

    if (isStart) {
        switch (even.key) {
            case "ArrowRight":
                a += 10;
                domCar1.style.marginLeft = a + 'px';
                x1 -= 1;
                domX1.style.width = x1 + 'px';
                break;
            case "d":
                b += 10;
                domCar2.style.marginLeft = b + 'px';
                x2 -= 1;
                domX2.style.width = x2 + 'px';
                break;
        }
    }
});

// Play sound effect when the "Bắt đầu" button is clicked
var startButton = document.querySelector('.btn-dark');
startButton.addEventListener('click', function () {
    var car1Sound = document.getElementById("car1Sound");
    car1Sound.play();

    var car2Sound = document.getElementById("car2Sound");
    car2Sound.play();
});

setTimeout(batdau, 2000);
