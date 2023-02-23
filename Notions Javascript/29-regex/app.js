const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. 48948484874874157 Odit, cupiditate? "


//  d = tout ce qui est chiffre
// const regex = /\d/g;

//  D = tout ce qui nest pas chiffre
// const regex = /\D/g;

//  S = tout ce qui nest pas un espace
// const regex = /\S/g;

// s = match tout ce qui est espaces
// const regex = /\s/g;

// W = tout ce qui nest pas Majuscule et minuscule
// const regex = /\W/g;

// w = tout ce qui est majuscule, minuscule et chiffre
// const regex = /\w/g;

// [A-Z] = match tout ce qui est lettre
// const regex = /[A-Z]/gi;

// [^A-Z] = match tout ce qui n'est pas lettres
// const regex = /[^A-Z]/gi;

// [a-z] = match tout ce qui est lettre minuscules
// const regex = /[a-z]/gi;

// [^a-z] = match tout ce qui nest pas minuscules
// const regex = /[^a-z]/gi;


// [0-9] = match tout ce qui est chiffre
// const regex = /[0-9]/gi;

// [^0-9] = match tout ce qui nest pas chiffre
const regex = /[^0-9]/gi;




console.log(str.match(regex));