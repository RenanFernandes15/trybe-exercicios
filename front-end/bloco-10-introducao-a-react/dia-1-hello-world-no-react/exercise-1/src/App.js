import './App.css';
import React, { Component } from 'react';

const Task = (value) => <li>{value}</li>;

const array = ['pescar', 'dormir', 'comer', 'deitar na rede', 'beber água de coco', 'deitar de novo'];
const arr = array.map((value) => Task(value));

class App extends Component {
  render() {
    return (
      <ul>
        { arr }
      </ul>
    )
  }
};

export default App;
