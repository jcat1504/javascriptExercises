//Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

//For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No

function checkMagazine(magazine, note) {
    var map = {};
    var replicable = true;
    for (var i of magazine) {
        map[i] = (map[i] || 0) + 1;
    }
    for (var i of note) {
        map[i] = (map[i] || 0) - 1;
    }
    for (var i in map) {
        if (map[i] < 0) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');

}