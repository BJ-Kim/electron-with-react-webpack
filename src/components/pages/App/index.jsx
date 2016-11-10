import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router';
import classNames from 'classNames';
const AppStyle = require('./AppStyle.scss');

@withRouter
export default class App extends Component {
  static PropTypes = {
    children: PropTypes.object.require
  }

  render() {
    return (
      <div>
        <div
          className={AppStyle.leftSideBar}
        >
          사이드바
        </div>
        {this.props.children}
      </div>
    );
  }
}
