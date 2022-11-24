function random() {
  var randomOne = Math.floor(Math.random() * 6) + 1;
  var randomTwo = Math.floor(Math.random() * 6) + 1;

  var randomOneImage = 'images/dice' + randomOne + '.png';
  var randomTwoImage = 'images/dice' + randomTwo + '.png';

  var diceOne = document.querySelectorAll('img')[0];
  diceOne.setAttribute('src', randomOneImage);
  var diceTwo = document.querySelectorAll('img')[1];
  diceTwo.setAttribute('src', randomTwoImage);

  if (randomOne > randomTwo) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
  } else if (randomOne < randomTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
  } else {
    document.querySelector("h1").innerHTML = "🎲 Draw! 🎲";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});
