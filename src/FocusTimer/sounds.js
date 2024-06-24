export const buttonPressAudio = new Audio('./assets/button-press.wav');

export const kichenTimer = new Audio('./assets/kichen-timer.mp3');

export const bgAudio = {
  forest: new Audio('./assets/forest.wav'),
  rain: new Audio('./assets/rain.wav'),
  coffeShop: new Audio('./assets/coffe-shop.wav'),
  fireplace: new Audio('./assets/fireplace.wav'),
};

for (const key in bgAudio) {
  bgAudio[key].loop = true;
}
