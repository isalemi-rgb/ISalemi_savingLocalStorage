const bestBtn = document.getElementById('best')
const counter = document.getElementById('counterDIV')
let count = 0

document.getElementById('plus').addEventListener('click', () => {
    count += 1
    counter.innerHTML = count
})

document.getElementById('minus').addEventListener('click', () => {
    count -= 1
    counter.innerHTML = count

    if (count <= 0) {
        count = 0
        counter.innerHTML = "0"
    }
})