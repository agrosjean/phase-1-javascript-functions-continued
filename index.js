function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog')

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(worker = '*') {
    return function (hello = 'special') {
        return `You are ${worker}${hello}${worker}!`;
    }
}








// const wrapAdjective = (wrapper = '*') => (meh = 'special') => `You are ${wrapper}${meh}${wrapper}!`;