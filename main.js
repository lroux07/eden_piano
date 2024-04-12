let container = document.querySelector('.container');
let octavePatern = 'BNBNBBNBNBNB';
let octaves_count = 2;
let mappingBtn = document.querySelector('.mappingBtn');

let white;
let black;

for(let i = 0; i < octaves_count; i++) {
    for(let j = 0; j < octavePatern.length; j++) {
        if(octavePatern[j] + octavePatern[j + 1] === 'BN') {    
            white = document.createElement('div');
            white.className = 'white';
            container.appendChild(white);
    
            black = document.createElement('div');
            black.className = 'black';
            white.appendChild(black);
        } else if(octavePatern[j] + octavePatern[j + 1] === 'BB') {
            white = document.createElement('div');
            white.className = 'white';
            container.appendChild(white);
        }
    }

    white = document.createElement('div');
    white.className = 'white';
    container.appendChild(white);
}


// Mapping

let isMapping = false;

mappingBtn.addEventListener('click', () => {
    mappingBtn.disabled = true;
    isMapping = true;

    // for (let i = 0; i < container.children.length; i++) {
    //     container.children[i].classList.toggle('white-active');

    //     black = document.querySelectorAll('.black');

    //     for (let j = 0; j < black.length; j++){
    //         black[j].classList.add("black-active");
    //     }
    // }
});


// CONFIG CLAVIER

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    midiAccess.inputs.forEach((input) => {
        // console.log(input);
        input.onmidimessage = onMIDIMessage;
    });
}

function onMIDIFailure(error) {
}

function onMIDIMessage(event) {
    let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
    for (const character of event.data) {
      str += `0x${character.toString(16)} `;
    }
    console.log(event.data);
}


function listInputsAndOutputs(midiAccess) {
    for (const entry of midiAccess.inputs) {
      const input = entry[1];
      console.log(
        `Input port [type:'${input.type}']` +
          ` id:'${input.id}'` +
          ` manufacturer:'${input.manufacturer}'` +
          ` name:'${input.name}'` +
          ` version:'${input.version}'`,
      );
    }
  
    for (const entry of midiAccess.outputs) {
      const output = entry[1];
      console.log(
        `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
      );
    }
}