import * as Tone from 'tone';

const synth = new Tone.Synth().toMaster();

const Oscillator = () => {
  return (
    <div id="wrapper">
      <button id="button" onClick={playSynth}>
        Note
      </button>
    </div>
  );
};

const playSynth = () => {
  synth.triggerAttackRelease('C2', 0.05);
};

export default Oscillator;
