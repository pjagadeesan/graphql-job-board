import React, { useState } from 'react';
import { login } from './auth';
import { withRouter } from 'react-router-dom';

const LoginForm = props => {
  const [form, setState] = useState({
    email: '',
    password: '',
    error: false,
  });

  const handleChange = e => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();
    //const { email, password } = this.state;
    login(form.email, form.password).then(ok => {
      if (ok) {
        props.onLogin();
        props.history.push('/');
      } else {
        setState({
          ...form,
          error: true,
        });
      }
    });
  };

  return (
    <form>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <p className="help is-danger">{form.error && 'Invalid credentials'}</p>
        <div className="control">
          <button className="button is-link" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default withRouter(LoginForm);

/*

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: false };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state;
    login(email, password).then(ok => {
      if (ok) {
        this.props.onLogin();
      } else {
        this.setState({ error: true });
      }
    });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <form>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div className="field">
          <p className="help is-danger">{error && 'Invalid credentials'}</p>
          <div className="control">
            <button className="button is-link" onClick={this.handleClick.bind(this)}>
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

*/
