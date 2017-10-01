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
  cookies.food = formatName(cookies.favoriteFood);
  cookies.color = formatName(cookies.favColor);
  return cookies;
};

const intro = (cookies) => {
  cookies = setFormattedProps(cookies);

  return `${ cookies.name } grew up ${ birthCity(cookies.goal) } As a child, ${ cookies.name } was always ${ childHoodHabits(cookies.goal, cookies.insanityLevel) } Everyone that met ${ cookies.name } would ${ peopleReactions(cookies.name, cookies.goal, cookies.insanityLevel) }`;
};

const likesDislikes = (cookies) => {

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
  likesDislikes
};
