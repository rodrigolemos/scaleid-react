import React from 'react';
import ReactDOM from 'react-dom';
import { Scale } from '../utils/Scale.js';
import { PanelScale } from './PanelScale';

export class Navbar extends React.Component {
    selectNote(choice) {
      ReactDOM.render(<PanelScale note={choice}/>, document.getElementById('content'));
    }
    render() {
        const scale = new Scale("C");
        const notes = scale.getScale( scale.intmaj );
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom pri-color">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle" id="btn-navbar-toggle">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                    {Object.keys( notes ).map( (note, index) => (
                        <li key={index}><a id={notes[note]} className="note" onClick={() => this.selectNote( notes[note] ) }>{notes[note]}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}