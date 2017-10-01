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

const intro = (cookies) => {
  cookies = setFormattedProps(cookies);

  return `${ cookies.name } grew up ${ birthCity(cookies.goal) } As a child, ${ cookies.name } was always ${ childHoodHabits(cookies.goal, cookies.insanityLevel) } Everyone that met ${ cookies.name } would ${ peopleReactions(cookies.name, cookies.goal, cookies.insanityLevel) }`;
};

const adultHoodOverview = (cookies) => {
  let endOfGood =`${ cookies.name }'s absolute favorite food in the whole world is ${ cookies.food }!`;
  let endOfBad = `${ cookies.name } would do anything for some ${ cookies.food }.`;

  if (cookies.insanityLevel < 4) {
    return cookies.goal == 'good' ?
    `is a saint! ${ cookies.name } works at the homeless shelter and loves to distribute ${ cookies.food } to all in need. ` + endOfGood :
    `is not very friendly and always yells at people to 'keep off the grass'. ${ cookies.name } never misses a chance to shoplift some ${ cookies.food } when at the market. ` + endOfBad;
  } else if (cookies.insanityLevel < 7) {
    return cookies.goal == 'good' ?
    `is very giving, but a little crazy. ${ cookies.name } invites homeless people over to eat ${ cookies.food }. ` + endOfGood :
    `is not a good person. ${ cookies.name } breaks into houses to steal ${ cookies.food } from desperate kids! ` + endOfBad;
  } else {
    return cookies.goal == 'good' ?
    `is just downright crazy! ${ cookies.name } skydives into war torn countries delivering food to the innocent and needy bystanders. ` + endOfGood :
    `is just pure evil! ${ cookies.name } runs a criminal orginazation with the sole purpose of gathering as much ${ cookies.food } as possible. Whomever stands in ${ cookies.name }'s way sleeps with the fishez! ` + endOfBad;
  }
};

const colorLoveSentence = (cookies) => {
  return `${ cookies.name } lives in a ${ cookies.color } house, drives a ${ cookies.color } car, and always wears as much ${ cookies.color } as possible.`;
};

const likesDislikes = (cookies) => {
  cookies = setFormattedProps(cookies);

  return `As an adult, ${ cookies.name } ${ adultHoodOverview(cookies) } ${ colorLoveSentence(cookies) }`;
};

const colorComplement = (name, color, sentanceStart) => {
  sentanceStart ? sentanceStart = 'C' : sentanceStart = 'c';
  return sentanceStart + `omplement ${ name } for wearing so much ${ color } and pulling it off in such a stylish way!`;
};

const meetingReaction = (cookies) => {
  insanityLevel = parseInt(cookies.insanityLevel);

  if (insanityLevel < 4) {
    return cookies.goal == 'good' ?
    `make sure to go over and say hello. ${ colorComplement(cookies.name, cookies.color, true) } Don't be surprised if ${ cookies.name } offers you some fresh ${ cookies.food }. You will always walk away with a smile after talking to ${ cookies.name }.` :
    `keep your distance. Try not to notice ${ cookies.name }'s all ${ cookies.color } look. Watch your bags if your carrying any ${ cookies.food }. ${ cookies.name } is always looking to steal some fresh ${ cookies.food }.`;
  } else if (insanityLevel < 7) {
    return cookies.goal == 'good' ?
    `don't go over unless you want a long conversation about the benefits of eating ${ cookies.food } and the wonders of the color ${ cookies.color }. ${ cookies.name } will likely invite you over for some ${ cookies.food }, even though you are a complete starnger! What a nice but strange person. Make sure to ${ colorComplement(cookies.name, cookies.color, false) }` :
    `turn the other way and hope ${ cookies.name } didnt see you. ${ cookies.name } will target your house if you enjoy bringing ${ cookies.food } home. If ${ cookies.name } does spot you, ${ colorComplement(cookies.name, cookies.color, false) } Then leave as quickly as possible.`;
  } else {
    return cookies.goal == 'good' ?
    `think twice before approching. At the drop of a hat ${ cookies.name } will offer you a ${ cookies.color } Tesla if you join in on a dangoures mission to the mexican waters to save hostages surrounded by pirates. The plan will likely be to offer them ${ cookies.food } in exchange for the prisoners. If your not too shocked with ${ cookies.name }'s intensity, ${ colorComplement(cookies.name, cookies.color, false) }. The world would be a better place if there were more ${ cookies.name }s around.` :
    `run for your life. If you have any ${ cookies.food } with you, throw whatever you have on you in the other direction. ${ cookies.name } is armed and extremely dangerous and will stop at nothing to obtain more delicious ${ cookies.food }. If ${ cookies.name } does get a hold of you ${ colorComplement(cookies.name, cookies.color, false) } Then pray that ${ cookies.name } lets you live!`;
  }
};

const conclusion = (cookies) => {
  cookies = setFormattedProps(cookies);

  return `Bottom line, if you ever see ${ cookies.name }, ${ meetingReaction(cookies) }`;
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
