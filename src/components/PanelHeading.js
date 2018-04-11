import React from 'react';

export class PanelHeading extends React.Component {
  render() {
    return (
      <div className='panel-heading'>
        <h1 className='panel-title click-neck'>{this.props.title}</h1>
        <span className='glyphicon glyphicon-search click-neck'></span>
      </div>
    )
  }
}