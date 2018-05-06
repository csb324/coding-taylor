let lines = [
    {
        who: "Cause the players",
        gonnaWhat: "play"
    },
    {
        who: "And the haters",
        gonnaWhat: "hate"
    },
    {
        who: "Heartbreakers",
        gonnaWhat: "break"
    },
    {
        who: "And the fakers",
        gonnaWhat: "fake"
    },
];
const imGonnaShake = {
    who: "Baby I'm just",
    gonnaWhat: "shake"
};

function buildPhrase(content) {
    const repeatedWords = Array(5).fill(content.gonnaWhat);
    return content.who + " gonna " + repeatedWords.join(", ");
}
function shakeItOff() {
    const shake = buildPhrase(imGonnaShake);
    return shake + ", I shake it off, shake it off";
}
function buildChorus() {
    let chorus = [];
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        const phrase = buildPhrase(line);
        chorus.push(phrase);
        
        if (index % 2 == 1) {
            chorus.push(shakeItOff());           
        }
    }
    console.log(chorus.join('\n'));
}

buildChorus()
