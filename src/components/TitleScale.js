import React from 'react';

export class TitleScale extends React.Component {
  render() {
    return (
      <div className="pattern-title">
        <input type="hidden" id="root" value={this.props.rootName}/>
        <h2>{this.props.rootName} Scales</h2>
        <p>
          Try to Remember!
        </p>
      </div>
    )
  }
}