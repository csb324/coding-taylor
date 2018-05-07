const coolThings = [];
const chillThings = [];

function isIt(things, x) {
  return (things.indexOf(x) > -1)
}

function checkIfCool(x) {
  return (isIt(coolThings, x) || isIt(chillThings, x));
}
function know(y) {
  return '\'cause I know ' + y;
}
function ask() {
  return 'Isn\'t it?';
}

checkIfCool('that I said all that');
checkIfCool('that you\'re in my head');
know('that it\'s delicate')
ask();
ask();
ask();
ask();
ask();
ask();
ask();
ask();
ask();

