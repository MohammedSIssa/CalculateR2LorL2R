var answer = document.querySelector('.answer-box')
var equation = document.querySelector('.equation-input')
var left2right = document.querySelector('.l2r')
var right2left = document.querySelector('.r2l')

var numsRegEx = /[0-9]/g
var opsRegEx = /[*|/]/g

left2right.addEventListener('click', ()=>{
    let eqn = equation.value
    let numbers = eqn.match(numsRegEx)
    let ops = eqn.match(opsRegEx)
    let ans1 = (ops[0] == "*") ? parseInt(numbers[0]) * parseInt(numbers[1]) : parseInt(numbers[0]) / parseInt(numbers[1])
    answer.textContent = (ops[1] == "*") ? ans1 * parseInt(numbers[2]) : ans1 / parseInt(numbers[2])
})

right2left.addEventListener('click', ()=>{
    let eqn = equation.value;
    let numbers = eqn.match(numsRegEx)
    let ops = eqn.match(opsRegEx)
    let ans1 = (ops[1] == "*") ? parseInt(numbers[2]) * parseInt(numbers[1]) : parseInt(numbers[2]) / parseInt(numbers[1])
    answer.textContent = (ops[0] == "/") ? ans1 / parseInt(numbers[0]) : ans1 * parseInt(numbers[0])
})