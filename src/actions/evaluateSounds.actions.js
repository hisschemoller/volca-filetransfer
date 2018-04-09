import fetchRandomSound from './fetchRandomSound.actions';

export default function evaluateSounds() {
  return (dispatch, getState) => {
    const durationMax = 90;
    const maxSamples = 100;
    const state = getState();
    if (
      state.sounds.totalDuration < durationMax &&
      state.sounds.channel < maxSamples
    ) {
      dispatch(fetchRandomSound());
    }
  };
}
