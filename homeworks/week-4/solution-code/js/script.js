window.addEventListener('keydown', playSound);

function playSound(event) {
  let key;
  let sound;

  // if / else method
  if (event.keyCode === 65) {
    sound = document.querySelector('.clap-sound');
    key = document.querySelector('.clap-key');
  } else if (event.keyCode === 83) {
    sound = document.querySelector('.hihat-sound');
    key = document.querySelector('.hihat-key');
  } else if (event.keyCode === 68) {
    sound = document.querySelector('.kick-sound');
    key = document.querySelector('.kick-key');
  } else if (event.keyCode === 70) {
    sound = document.querySelector('.openhat-sound');
    key = document.querySelector('.openhat-key');
  } else if (event.keyCode === 71) {
    sound = document.querySelector('.boom-sound');
    key = document.querySelector('.boom-key');
  } else if (event.keyCode === 72) {
    sound = document.querySelector('.ride-sound');
    key = document.querySelector('.ride-key');
  } else if (event.keyCode === 74) {
    sound = document.querySelector('.snare-sound');
    key = document.querySelector('.snare-key');
  } else if (event.keyCode === 75) {
    sound = document.querySelector('.tom-sound');
    key = document.querySelector('.tom-key');
  } else if (event.keyCode === 76) {
    sound = document.querySelector('.tink-sound');
    key = document.querySelector('.tink-key');
  }

  // alternative syntax using switch / case
  switch (event.keyCode) {
    case 65:
      sound = document.querySelector('.clap-sound');
      key = document.querySelector('.clap-key');
      break;
    case 83:
      sound = document.querySelector('.hihat-sound');
      key = document.querySelector('.hihat-key');
      break;
    case 68:
      sound = document.querySelector('.kick-sound');
      key = document.querySelector('.kick-key');
      break;
    case 70:
      sound = document.querySelector('.openhat-sound');
      key = document.querySelector('.openhat-key');
      break;
    case 71:
      sound = document.querySelector('.boom-sound');
      key = document.querySelector('.boom-key');
      break;
    case 72:
      sound = document.querySelector('.ride-sound');
      key = document.querySelector('.ride-key');
      break;
    case 74:
      sound = document.querySelector('.snare-sound');
      key = document.querySelector('.snare-key');
      break;
    case 75:
      sound = document.querySelector('.tom-sound');
      key = document.querySelector('.tom-key');
      break;
    case 76:
      sound = document.querySelector('.tink-sound');
      key = document.querySelector('.tink-key');
      break;
  }

  if (key && sound) {
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition);
  }
}

// Refactored

window.addEventListener('keydown', playSoundRefactored);

function playSoundRefactored(event) {
  const keyCode = event.keyCode;

  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (key && sound) {
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
    key.addEventListener('transitionend', removeTransition);
  }
}

function removeTransition(event) {
  event.target.classList.remove('playing');
}
