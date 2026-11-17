const counter = document.getElementById('counterDIV')
let count = 0
//let best = document.getElementById('bestDIV').value

if (!localStorage.getItem('countData')) {
    localStorage.getItem("countData", JSON.stringify({count: 0, lastUpdated: null, best: 0}));
}
//too far gone

document.getElementById('plus').addEventListener('click', () => {
    count += 1
//    best += 1
    counter.innerHTML = count
//    console.log(best)
})

document.getElementById('minus').addEventListener('click', () => {
    count -= 1
    counter.innerHTML = count

    if (count <= 0) {
        count = 0
        counter.innerHTML = "0"
    }
})

document.getElementById('resetBtn').addEventListener('click', () => {
    count = 0
    counter.innerHTML = "0"

//    if (best >= count) {
//        best = count
//    }
//    return best
})


