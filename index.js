// Your code here
function saturdayFun(activityString = "roller-skate"){
  return `This Saturday, I want to ${activityString}!`
}

const mondayWork = (activityString = "go to the office") => {
return `This Monday, I will ${activityString}.`
}

function wrapAdjective(string = "*"){
  return function(adjective = "special"){
    return `You are ${string}${adjective}${string}!`;
  }
}

const Calculator = {}