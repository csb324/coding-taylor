function isWitch(person) {
    return (typeof person.turnIntoFrog === 'function');
}

function burn(person) {
    if (isWitch(person)) {
        return true;
    } else {
        return true;
    }
}

if (burn(taylor)) {
    console.log("Light me up");
}
