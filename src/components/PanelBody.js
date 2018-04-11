import React from 'react';
import { NotesInScale } from './NotesInScale';
import { FilterNeck } from './FilterNeck';

export class PanelBody extends React.Component {
  render() {
    return (
      <div className="panel-body panel-scale">
        <div className="row panel-btn-scale">
          <NotesInScale scale={this.props.scale} note={this.props.note}/>
        </div>
        <div className="row panel-guess"></div>
        <FilterNeck/>
        <div className='neck neck-guitar'></div>
        <div className='panel-footer ttr-panel'></div>
      </div>
    )
  }
}