var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];
var word = words[Math.floor(Math.random() * words.length)];

var answerarray = [];
for (var i = 0;i < word.length; i++){
    answerarray[i] = "_";
}
var remainingLetters = word.length;
var stepLimit = 12;
while (remainingLetters > 0 && stepLimit > 0){

    alert(answerarray.join(" "));
var guess = prompt("Угадайте букву или нажмите отмена");
if (guess === null){
    break;
} else if (guess.length !== 1){
    alert("Пожалуйста введите только одну букву.");
} else {
    stepLimit--;
    guess = guess.toLowerCase();

    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess){
            answerarray[j] = guess;
            remainingLetters--;
        }
    }

}
}
alert(answerarray.join(" "));
if (stepLimit > 0) {
alert("Отлично! Было загадано слово " + word);
}
else {
alert("Отправляйтесь на висилицу! Было загадано слово " + word);    
}