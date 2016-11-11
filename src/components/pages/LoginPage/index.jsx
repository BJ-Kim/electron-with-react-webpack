import React,{PropTypes} from 'react';
import {withRouter} from 'react-router';
import { observer } from 'mobx-react';
import { injectAuthState } from 'mobservables';

@injectAuthState
@observer
@withRouter
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
  }

  _onSubmit = (event) => {
    event.preventDefault();
    console.log(this.refs.ID.value);
    console.log(this.refs.PWD.value);
    this.props.authState.login(this.refs.ID.value, this.refs.PWD.value);
  }

  render() {
    return (
      <div>
        로그인 페이지
        <form onSubmit={this._onSubmit}>
          <input 
            type="text"
            ref="ID"
            placeholder="ID"
          />
          <input 
            type="text"
            ref="PWD"
            placeholder="password"
          />
          <input
            type="submit"
            value="로그인"
          />
        </form>
      </div>
    );
  }
}
