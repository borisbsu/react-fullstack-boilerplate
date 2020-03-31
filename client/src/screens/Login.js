import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

class Login extends Component {
  componentWillUpdate(nextProps) {
    // optional redirect if they went to a protected route without logging in
    // from is set in require_auth
    // get auth when app boots up first time or refresh...
    const { auth, history } = nextProps;
    const from = localStorage.getItem('from') || '/';
    if (auth) {
      history.push(from);
      localStorage.removeItem('from');
    }
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card blue-grey darken-1 ">
              <div className="card-content white-text">
                <span className="card-title">Login</span>
                <LoginForm />
                <Link to="/forgotPassword">Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 15px;
  text-align: center;
`;

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Login);
