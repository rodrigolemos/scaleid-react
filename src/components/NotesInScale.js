import React from 'react';
import Tone from 'tone';

export class NotesInScale extends React.Component {
  playNote(note) {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease( note + "4", "8n");
  }
  render() {
    const notes = this.props.scale;
    const buttons = notes.map( (note, index) => {
      
      let btndesign = "btn btn-scale ";
      if ( ( notes.length === 7 ) && ( [0, 2, 4].indexOf(index) >= 0 ) ) {
        btndesign += "btn-danger";
      } else {
        btndesign += "btn-info";
      }
      
      return (
        <button key={index} className={ btndesign }
        onClick={() => this.playNote( note ) }>{note}</button>
      )
      
    });
    return <div>{buttons}</div>
  }
}