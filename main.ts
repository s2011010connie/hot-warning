if (input.temperature() < 30) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
} else if (input.temperature() >= 30) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . # . #
        `)
}
