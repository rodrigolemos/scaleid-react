import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './components/Welcome';
import { Navbar } from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.js';
import './containers/index.css';

ReactDOM.render(<Welcome/>, document.getElementById('content'));
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
