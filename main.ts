let tempActual = input.temperature()
let tempAnt = input.temperature()
basic.forever(function () {
    if (tempActual < 5) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        if (tempActual >= 5 && tempActual <= 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            if (tempActual >= 10 && tempActual < 15) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    `)
            } else {
                if (tempActual >= 15 && tempActual < 20) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . . . .
                        `)
                } else {
                    if (tempActual >= 20 && tempActual < 25) {
                        basic.showLeds(`
                            . . . . .
                            # # # # #
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    } else {
                        basic.showLeds(`
                            # # # # #
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                }
            }
        }
    }
    if (tempActual != tempAnt) {
        tempAnt = tempActual
    }
    tempActual = input.temperature()
})
