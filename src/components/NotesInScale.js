import React from 'react';

export class NotesInScale extends React.Component {
  render(){
    const notes = this.props.scale;
    const buttons = notes.map( (note, index) => {
      return (
        <button key={index} className="btn btn-scale btn-info">{note}</button>
      )
    });
    return <div>{buttons}</div>
  }
}