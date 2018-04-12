import React from 'react';

export class NotesInScale extends React.Component {
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
        <button key={index} className={ btndesign }>{note}</button>
      )
      
    });
    return <div>{buttons}</div>
  }
}