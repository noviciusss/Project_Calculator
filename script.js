const show = document.getElementById('show');
const ac = document.getElementById('ac');
const per = document.getElementById('per');
const div = document.getElementById('div');
const mul = document.getElementById('mul');
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const eq = document.getElementById('equal');
const dot = document.getElementsByClassName('dot')[0];
const numbers = document.querySelectorAll('#numbers');



function clear() {
    document.getElementById("show").innerHTML = "";
}
numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
        if (show.innerHTML === "0") {
            show.innerHTML = "";
        }
        show.innerText += e.target.innerHTML.trim();
    });
});
function dis(val) { 
    document.getElementById("show").innerHTML += val 
} 