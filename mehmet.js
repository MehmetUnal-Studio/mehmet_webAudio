//var loopBeat;
//var synth;

//function setup() {
//synth = new Tone.AMSynth().toMaster();
//loopBeat = new Tone.Loop(song, '16n');
//Tone.Transport.start();
//loopBeat.start(0);
//}

//function song(time){
//synth.triggerAttackRelease('C6', '64n', time);
//console.log(time)

//}
const synth = new Tone.AMSynth().toMaster();

const look = document.querySelector("tone-keyboard");

look.addEventListener("noteon", function(e) {
  console.log(e);
});

//attach a listener to the keyboard events
document.querySelector("tone-keyboard").addEventListener("noteon", e => {
  synth.triggerAttack(e.detail.name);
});

document.querySelector("tone-keyboard").addEventListener("noteoff", e => {
  synth.triggerRelease();
});
