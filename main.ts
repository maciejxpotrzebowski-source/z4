input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    if (A == B) {
        basic.showString("A=B")
    } else if (A > B) {
        basic.showString("A>B")
    } else {
        basic.showString("A<B")
    }
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
let B = 0
let A = 0
A = 0
B = 0
basic.forever(function () {
	
})
