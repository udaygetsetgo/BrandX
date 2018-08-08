import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { css } from 'styled-components';
import Home from './components/home';

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {

    return (
      <Home></Home>
    )
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
