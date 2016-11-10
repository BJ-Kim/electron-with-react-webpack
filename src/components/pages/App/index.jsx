import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router';

@withRouter
export default class App extends Component {
  static PropTypes = {
    children: PropTypes.object.require
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
