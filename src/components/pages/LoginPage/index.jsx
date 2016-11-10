import React,{PropTypes} from 'react';
import {withRouter} from 'react-router';

@withRouter
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        로그인 페이지
      </div>
    );
  }
}
