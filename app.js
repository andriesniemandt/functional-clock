import {
    compose,
    serializeClock,
    convertToCivilianTime,
    doubleDigits,
    display,
    formatClock
} from "./utils.js"

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClock,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    )

startTicking()