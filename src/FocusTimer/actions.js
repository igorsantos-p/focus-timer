import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sound from './sounds.js';
import { isPlayingMusic,  } from './events.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countDown();
  sound.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay(5);
  sound.buttonPressAudio.play();
}

export function toggleMusic(e) {
  let audioSelected = e.target.dataset.audio;

  if (state.isPlaying == '') {
    sound.bgAudio[audioSelected].play();
    state.isPlaying = audioSelected;
  } else if (sound.bgAudio[audioSelected].paused) {
    sound.bgAudio[state.isPlaying].pause();
    sound.bgAudio[audioSelected].play();
    state.isPlaying = audioSelected;
  } else {
    sound.bgAudio[audioSelected].pause();
    state.isPlaying = '';
  }
  isPlayingMusic();
}

export function increase() {
  if (state.isRunning) return;

  let minutes = Number(el.minutes.textContent) + 5;
  let seconds = Number(el.seconds.textContent);

  if (minutes > 60) return;

  timer.updateDisplay(minutes, seconds);
  sound.buttonPressAudio.play();
}

export function decrease() {
  if (state.isRunning) return;

  let minutes = Number(el.minutes.textContent) - 5;
  let seconds = Number(el.seconds.textContent);

  if (minutes < 0) return;

  timer.updateDisplay(minutes, seconds);
  sound.buttonPressAudio.play();
}