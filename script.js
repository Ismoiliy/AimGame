let input = document.querySelector('input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;



btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value > 4) {
        time = input.value;
        input.value = '';
        clearInterval(interval)
        start();
        score = 0;
        let result = document.querySelector('.result');
        if (result) {
            result.style.display = 'none';
        }
    }
})

// setTimeout(() => {
//     отрабатывает только 1 раз
// }, 1000);

// clearInterval()

// setInterval(() => {
//     будет работать бесконечно пока мы его не остановим
// }, 1000);


function start() {
    interval = setInterval(() => logic(), 1000);
    CreateBall()
    btn.style.visibility = 'hidden';
}

function logic() {
    if (time) {
        let currentTime = --time;
        currentTime = currentTime < 10 ? '0' + currentTime : currentTime;
        timeOut.innerHTML = `00: ${currentTime}`;
        currentTime <= 5 ? timeOut.style.color = 'red' : timeOut.style.color = 'green'
    } else {
        endGame()
        btn.style.visibility = 'visible';
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали: ${score} очков`
}

function CreateBall() {
    let ball = document.createElement('div'),
        size = 50,
        coor = box.getBoundingClientRect();
    let x = random(0, coor.width - size),
        y = random(0, coor.height - size);

    ball.classList.add('ball');
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    ball.style.background = 'red';

    box.append(ball)

}

box.addEventListener('click', (e) => {
    if (e.target.classList.contains('ball')) {
        score++;
        e.target.remove()
        CreateBall()
    }
})


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/* ДЗ */

/* Разный размер шарика
   разный цвет шарика
   разная форма шарика
*/
