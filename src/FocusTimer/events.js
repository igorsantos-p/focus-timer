import * as elements from './elements.js';
import state from './state.js';
import * as actions from './actions.js';

export function registerControls() {
  elements.controls.onclick = (e) => {
    const action = e.target.dataset.action;

    if (typeof actions[action] !== 'function') return;

    actions[action]();
  };
}
export function playMusic() {
  elements.soundOptions.onclick = (e) => {
    const action = e.target.dataset.action;

    if (typeof actions[action] !== 'function') return;

    actions[action](e);
  };
}

export function isPlayingMusic() {
  const array = Array.from(elements.soundOptions.children);
  if (state.isPlaying == '') {
    array.forEach((e) => {
      e.classList.remove('active');
    });
  } else {
    array.forEach((e) => {
      if (e.dataset.audio == state.isPlaying) {
        e.classList.add('active');
      } else {
        e.classList.remove('active');
      }
    });
  }
}