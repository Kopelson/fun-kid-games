const emojiArray = [
    "ð",
    "ðĶ",
    "ðĶ",
    "ð­",
    'ð',
    'ð',
    'ðđ',
    'ð°',
    'ð',
    'ðŋ',
    'ðĶ',
    'ðĶ',
    'ðŧ',
    'ðĻ',
    'ðž',
    'ðĶĨ',
    'ðĶĶ',
    "ðĶĻ",
    "ðĶ",
    "ðĶĄ",
    "ðū",
    "ðĶ",
    "ð",
    "ð",
    "ðĢ",
    "ðĪ",
    "ðĨ",
    "ðĶ",
    "ð§",
    "ð",
    "ðĶ",
    "ðĶ",
    "ðĶĒ",
    "ðĶ",
    "ðĶĐ",
    "ðĶ",
    "ðĶ",
    "ðļ",
    "ð",
    "ðĒ",
    "ðĶ",
    "ð",
    "ðē",
    "ð",
    "ðĶ",
    "ðĶ",
    "ðģ",
    "ð",
    "ðŽ",
    "ð",
    "ð ",
    "ðĄ",
    "ðĶ",
    "ð",
    "ð",
    "ð",
    "ðĶ",
    "ð",
    "ð",
    "ð",
    "ð",
    "ðĶ",
    "ð·",
    "ðļ",
    "ðĶ",
    "ðĶ",
    "ðĶ ",
    "ð",
    "ðļ",
    "ðŪ",
    "ðĩ",
    "ðđ",
    "ðĨ",
    "ðš",
    "ðŧ",
    "ðž",
    "ð·",
    "ðą",
    "ðē",
    "ðģ",
    "ðī",
    "ðĩ",
    "ðū",
    "ðŋ",
    "â",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ðĨ­",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ð",
    "ðĨ",
    "ð",
    "ðĨĨ",
    "ðĨ",
    "ð",
    "ðĨ",
    "ðĨ",
    "ð―",
    "ðķ",
    "ðĨ",
    "ðĨŽ",
    "ðĨĶ",
    "ð§",
    "ð§",
    "ð",
    "ðĨ",
    "ð°",
    "ð",
    "ðĨ",
    "ðĨ",
    "ðĨĻ",
    "ðĨŊ",
    "ðĨ",
    "ð§",
    "ð§",
    "ð",
    "ð",
    "ðĨĐ",
    "ðĨ",
    "ð",
    "ð",
    "ð",
    "ð­",
    "ðĨŠ",
    "ðŪ",
    "ðŊ",
    "ðĨ	",
    "ð§",
    "ðĨ",
    "ðģ",
    "ðĨ",
    "ðē",
    "ðĨĢ",
    "ðĨ",
    "ðŋ",
    "ð§",
    "ð§",
    "ðĨŦ"
]

let number = 0;

const getRandomEmoji = () => {
   const randomIndex = Math.floor(Math.random()*151);
   return emojiArray[randomIndex];
}

const displayRandomAmountOfEmoji = () => {
    resetGame();
    //get random emoji
    const randomEmoji = getRandomEmoji();
    //get a random number 1 through 10
    const randomNumber = Math.ceil(Math.random()*10);
    //set string with random number of random emoji
    const displayString =  repeatStringNumTimes(randomEmoji, randomNumber);
    //set global number to random number
    number = randomNumber;
    //set display
    document.getElementById('emojis').innerText = displayString;
    document.getElementById('emoji-label').innerText = `How many ${randomEmoji}?`;
    document.getElementById('number-choices').classList.remove('hide');
}

function repeatStringNumTimes(string, times) {
    if(times < 0) 
      return "";
    if(times === 1) 
      return string;
    else 
      return string + repeatStringNumTimes(string, times - 1);
}

function checkNum(num) {
    if(document.getElementById('alert').classList){
        document.getElementById('alert').classList.remove('win');
        document.getElementById('alert').classList.remove('loss');
        document.getElementById('alert').classList.remove('hide');   
    }
    
    
    if (num === number){
        console.log("You win!");
        document.getElementById('alert').innerText = "Correct!"
        document.getElementById('alert').classList.add('win');
    } else {
        console.log("You lost!");
        document.getElementById('alert').innerText = "Oops, try again!";
        document.getElementById('alert').classList.add('loss');
    }
}

function resetGame(){
    if(document.getElementById('alert').classList){
        document.getElementById('alert').classList.remove('win');
        document.getElementById('alert').classList.remove('loss');
        document.getElementById('alert').classList.add('hide');
        document.getElementById('alert').innerText = "";
        document.getElementById('emojis').innerText = ""
    document.getElementById('emoji-label').innerText = "";
    document.getElementById('number-choices').classList.add('hide');   
    }  
}
