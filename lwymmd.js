const taylorsLikes = [
    'Cats',
    'Glitter',
    'Polaroid cameras',
    'The number 13'
]
function doesTaylorLike(subject) {
    if (taylorsLikes.indexOf(subject) > -1) {
        return "yes";
    } else {
        return "no";
    }
}

doesTaylorLike("your little games");
// => no
doesTaylorLike("your tilted stage");
// => no
doesTaylorLike("the role you made taylor play");
// => no
doesTaylorLike("you");
// => no
