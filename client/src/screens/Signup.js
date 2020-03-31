import React, { Component } from "react";
import styled from "styled-components";

import SignupForm from "../components/auth/SignupForm";

class Signup extends Component {
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card blue-grey darken-1 ">
              <div className="card-content white-text">
                <span className="card-title">Signup</span>
                <SignupForm />
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

const Title = styled.h1`
  color: ${props => props.theme.dark};
`;

export default Signup;
