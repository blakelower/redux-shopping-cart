
import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducers from './redux/reducers';

const Store = createStore(reducers);

render(<Provider store={Store}><App/></Provider>, 
document.getElementById("root"));
