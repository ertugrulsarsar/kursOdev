let count = 0;

function increase() {
    count++;
    document.getElementById('counter').innerText = count;
}

function decrease() {
    count--;
    document.getElementById('counter').innerText = count;
}