import React from 'react';

export class Navbar extends React.Component {
    render() {
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
                    <li><a id="C" className="note"> C </a></li>
                    <li><a id="D" className="note"> D </a></li>
                    <li><a id="E" className="note"> E </a></li>
                    <li><a id="F" className="note"> F </a></li>
                    <li><a id="G" className="note"> G </a></li>
                    <li><a id="A" className="note"> A </a></li>
                    <li><a id="B" className="note"> B </a></li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}