import React,{PropTypes} from 'react';
import {withRouter} from 'react-router';

@withRouter
export default class IntroPage extends React.Component {
  static propTypes = {

  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
    }
    this._goLogin = this._goLogin.bind(this);
  }

  componentDidMount() {
  }

  _goLogin() {
    this.props.router.replace(`/login`);
  }

  render() {
    return (
      <div>
        렌카 어플입니다.ㅎㅎㅎㅎㅎ
        <button onClick={this._goLogin}>로그인페이지이동</button>
      </div>
    );
  }
}
