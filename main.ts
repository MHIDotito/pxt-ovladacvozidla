radio.setGroup(160)


input.onButtonPressed(Button.A, function () {
    radio.sendString("go")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("back")
})
led.plot(2, 2)













// let ID = 1
// let accX = 0

// input.onButtonPressed(Button.A, function () {
//     if (ID == 1) {
//         radio.sendValue("speed", -255)
//         ID = 2
//     }

//     if (ID == 2) {
//         radio.sendValue("speed", -200)
//         ID = 3
//     }
//     if (ID == 3) {
//         radio.sendValue("speed", -120)
//         ID = 1
//     }

// })



// input.onButtonPressed(Button.B, function () {
//     radio.sendValue("brake", 0)
// })

// led.plot(2, 2)
// basic.forever(function() {
//     accX = input.acceleration(Dimension.X)
//     radio.sendNumber(accX)
// })