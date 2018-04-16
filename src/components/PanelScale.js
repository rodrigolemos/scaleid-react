import React from 'react';
import { TitleScale } from './TitleScale';
import { PanelHeading } from './PanelHeading';
import { PanelBody } from './PanelBody';
import { Scale } from '../utils/Scale.js';

export class PanelScale extends React.Component {
  render() {
    const scales = new Scale( this.props.note ).getField();
    return (
      <div className="row divs">
        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2
        col-md-offset-3" align="center">
            <TitleScale rootName={this.props.note}/>
            {Object.keys( scales ).map( (item, index) => (
                <div key={index} className="pattern-body">
                  <div className="panel panel-default">
                    <PanelHeading title={item} />
                    <PanelBody scale={scales[item]} note={this.props.note} />
                  </div>
                </div>
            ))}
        </div>
      </div>
    )
  }
}