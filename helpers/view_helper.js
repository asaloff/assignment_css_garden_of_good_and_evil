const bodyColor = (color) => {
  if (color) {
    color = color.toLowerCase();
    return `background-${ color }`;
  }
};

const checkColorSelected = (favColor, colorValue) => {
  if (!favColor && colorValue == '') {
    return 'selected';
  } else if (favColor == colorValue) {
    return 'selected';
  }
};

const checkGoalSelected = (goal, selectedGoal) => {
  if (goal == selectedGoal) return 'checked';
};

const currentName = (name) => {
  if (name) return formatName(name);
};

const currentFood = (food) => {
  if (food) return formatName(food);
};

const currentInsanityLevel = (insanityLevel) => {
  if (insanityLevel) {
    return insanityLevel;
  } else {
    return '0';
  }
};

const formatName = (name) => {
  if (!name) return;
  name = name.toLowerCase();

  return name.replace(/(^[\w])|(\b[\w])/g, (m) => {
    return m.toUpperCase();
  });
};

const goalImg = (goal) => {
  if (!goal) return;

  return goal == 'good' ? './images/angel.png' : './images/devil.png';
};

const birthCity = (goal) => {
  return goal == 'good' ? 'in the bright and beautiful city of Pleasantville.' : 'in the deep dark alleys of Chernobyl.';
};

const childHoodHabits = (goal, insanityLevel) => {
  insanityLevel = parseInt(insanityLevel);

  if (insanityLevel < 4) {
    return goal == 'good' ? 'well dressed, clean, and very polite.' : 'wearing torn clothes, hated showers, and would walk around town with a menacing look.';
  } else if (insanityLevel < 7) {
    return goal == 'good' ? 'slightly messy, quirky, but ultimatley very pleasant.' : 'shirtless, shoeless, and muttering bad language to everyone.';
  } else {
    return goal == 'good' ? 'hyperactive, energetic, and would jump off a building if it meant saving a cat!' : 'walking around totally naked, peeing on anyone that would get close enough!';
  }
};

const peopleReactions = (name, goal, insanityLevel) => {
  insanityLevel = parseInt(insanityLevel);

  if (insanityLevel < 4) {
    return goal == 'good' ? `make sure to come over and say hi, showering ${ name } with love and affection. ${ name  } was the perfect child!` : `feel bad for, and try to help ${ name } to be a positive member of society.`;
  } else if (insanityLevel < 7) {
    return goal == 'good' ? `smile, wave and be generally very hopeful about ${ name }'s future.` : `get angry, and have a sudden urge to give ${ name  } a smack upside the head.`;
  } else {
    return goal == 'good' ? `politley steer clear. ${ name } tended to be a bit overwhelming.` : `run for the hills! That kid was completly bonkers!`;
  }
};

const setFormattedProps = (cookies) => {
  cookies.name = formatName(cookies.personaName);
  cookies.food = formatName(cookies.favFood).toLowerCase();
  cookies.color = formatName(cookies.favColor).toLowerCase();
  return cookies;
};

const intro = (personaName, goal, insanityLevel) => {
  let name = formatName(personaName);

  return `${ name } grew up ${ birthCity(goal) } As a child, ${ name } was always ${ childHoodHabits(goal, insanityLevel) } Everyone that met ${ name } would ${ peopleReactions(name, goal, insanityLevel) }`;
};

const adultHoodOverview = (name, food, goal, insanityLevel) => {
  let endOfGood =`${ name }'s absolute favorite food in the whole world is ${ food }!`;
  let endOfBad = `${ name } would do anything for some ${ food }.`;

  if (insanityLevel < 4) {
    return goal == 'good' ?
    `is a saint! ${ name } works at the homeless shelter and loves to distribute ${ food } to all in need. ` + endOfGood :
    `is not very friendly and always yells at people to 'keep off the grass'. ${ name } never misses a chance to shoplift some ${ food } when at the market. ` + endOfBad;
  } else if (insanityLevel < 7) {
    return goal == 'good' ?
    `is very giving, but a little crazy. ${ name } invites homeless people over to eat ${ food }. ` + endOfGood :
    `is not a good person. ${ name } breaks into houses to steal ${ food } from desperate kids! ` + endOfBad;
  } else {
    return goal == 'good' ?
    `is just downright crazy! ${ name } skydives into war torn countries delivering food to the innocent and needy bystanders. ` + endOfGood :
    `is just pure evil! ${ name } runs a criminal orginazation with the sole purpose of gathering as much ${ food } as possible. Whomever stands in ${ name }'s way sleeps with the fishez! ` + endOfBad;
  }
};

const colorLoveSentence = (name, color) => {
  return `${ name } lives in a ${ color } house, drives a ${ color } car, and always wears as much ${ color } as possible.`;
};

const likesDislikes = (personaName, favFood, favColor, goal, insanityLevel) => {
  let name = formatName(personaName);
  let food = formatName(favFood).toLowerCase();
  let color = formatName(favColor).toLowerCase();

  return `As an adult, ${ name } ${ adultHoodOverview(name, food, goal, insanityLevel) } ${ colorLoveSentence(name, color) }`;
};

const colorComplement = (name, color, sentanceStart) => {
  sentanceStart ? sentanceStart = 'C' : sentanceStart = 'c';
  return sentanceStart + `omplement ${ name } for wearing so much ${ color } and pulling it off in such a stylish way!`;
};

const meetingReaction = (name, food, color, goal, insanityLevel) => {
  insanityLevel = parseInt(insanityLevel);

  if (insanityLevel < 4) {
    return goal == 'good' ?
    `make sure to go over and say hello. ${ colorComplement(name, color, true) } Don't be surprised if ${ name } offers you some fresh ${ food }. You will always walk away with a smile after talking to ${ name }.` :
    `keep your distance. Try not to notice ${ name }'s all ${ color } look. Watch your bags if your carrying any ${ food }. ${ name } is always looking to steal some fresh ${ food }.`;
  } else if (insanityLevel < 7) {
    return goal == 'good' ?
    `don't go over unless you want a long conversation about the benefits of eating ${ food } and the wonders of the color ${ color }. ${ name } will likely invite you over for some ${ food }, even though you are a complete starnger! What a nice but strange person. Make sure to ${ colorComplement(name, color, false) }` :
    `turn the other way and hope ${ name } didnt see you. ${ name } will target your house if you enjoy bringing ${ food } home. If ${ name } does spot you, ${ colorComplement(name, color, false) } Then leave as quickly as possible.`;
  } else {
    return goal == 'good' ?
    `think twice before approching. At the drop of a hat ${ name } will offer you a ${ color } Tesla if you join in on a dangoures mission to the mexican waters to save hostages surrounded by pirates. The plan will likely be to offer them ${ food } in exchange for the prisoners. If your not too shocked with ${ name }'s intensity, ${ colorComplement(name, color, false) }. The world would be a better place if there were more ${ name }s around.` :
    `run for your life. If you have any ${ food } with you, throw whatever you have on you in the other direction. ${ name } is armed and extremely dangerous and will stop at nothing to obtain more delicious ${ food }. If ${ name } does get a hold of you ${ colorComplement(name, color, false) } Then pray that ${ name } lets you live!`;
  }
};

const conclusion = (personaName, favFood, favColor, goal, insanityLevel) => {
  let name = formatName(personaName);
  let food = formatName(favFood).toLowerCase();
  let color = formatName(favColor).toLowerCase();

  return `Bottom line, if you ever see ${ name }, ${ meetingReaction(name, food, color, goal, insanityLevel) }`;
};

module.exports = {
  currentName,
  currentFood,
  checkColorSelected,
  currentInsanityLevel,
  checkGoalSelected,
  bodyColor,
  formatName,
  goalImg,
  intro,
  likesDislikes,
  conclusion
};
