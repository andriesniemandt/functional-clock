export const compose = (...fns) => (arg) =>
    fns.reduce(
        (composed, f) => f(composed),
        arg
    )

export const serializeClock = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

export const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
        clockTime.hours - 12 :
        clockTime.hours
})

export const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

export const display = target => time => target(time)

export const formatClock = format => time =>
    format.replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm)

export const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
        `0${clockTime[key]}` :
        clockTime[key]
})

export const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

export const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

