let output = document.getElementById("output")
let clearAll = document.getElementById("clearAll")

// numbers 
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
// Operators 
let plus = document.getElementById("plus")
let divide = document.getElementById("divide")
let mul = document.getElementById("mul")
let minus = document.getElementById("minus")
// Equal 
let equal = document.getElementById("equal")
let point = document.getElementById("point")


clearAll.onclick = function () {
    output.innerHTML = " "
}
one.onclick = function () {
    output.innerHTML += 1
}
two.onclick = function () {
    output.innerHTML += 2
}
three.onclick = function () {
    output.innerHTML += 3
}
four.onclick = function () {
    output.innerHTML += 4
}
five.onclick = function () {
    output.innerHTML += 5
}
six.onclick = function () {
    output.innerHTML += 6
}
seven.onclick = function () {
    output.innerHTML += 7
}
eight.onclick = function () {
    output.innerHTML += 8
}
nine.onclick = function () {
    output.innerHTML += 9
}
zero.onclick = function () {
    output.innerHTML += 0
}
zerozero.onclick = function () {
    output.innerHTML += "00"
}
point.onclick = function () {
    output.innerHTML += "."
}
plus.onclick = function () {
    output.innerHTML += "+"
}
minus.onclick = function () {
    output.innerHTML += "-"
}
mul.onclick = function () {
    output.innerHTML += "*"
}
divide.onclick = function () {
    output.innerHTML += "/"
}
equal.onclick = function () {
    let result = eval(output.innerHTML)
    output.innerHTML = result
}

