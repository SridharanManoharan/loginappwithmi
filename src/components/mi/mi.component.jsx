import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  MIBox
} from './mi.styles';

const miValue = [
  { label: "a", value: 'a' },
  { label: "b", value: 'b' },
  { label: "c", value: 'c' },
  { label: "d", value: 'd' },
  { label: "e", value: 'e' },
  { label: "f", value: 'f' },
  { label: "g", value: 'g' },
  { label: "h", value: 'h' },
  { label: "i", value: 'i' },
  { label: "j", value: 'j' },
  { label: "k", value: 'k' },
  { label: "l", value: 'l' },
  { label: "m", value: 'm' },
  { label: "n", value: 'n' },
  { label: "o", value: 'o' },
  { label: "p", value: 'p' },
  { label: "q", value: 'q' },
  { label: "r", value: 'r' },
  { label: "s", value: 's' },
  { label: "t", value: 't' },
  { label: "u", value: 'u' },
  { label: "v", value: 'v' },
  { label: "w", value: 'w' },
  { label: "x", value: 'x' },
  { label: "y", value: 'y' },
  { label: "z", value: 'z' },
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 }
];

const MI = () => {

  const handleSubmit = async event => {
    event.preventDefault();
    window.open(`${window.location.origin}/shop`, '_self')
  };

    return (
      <SignInContainer>
        <SignInTitle>Memorable Information</SignInTitle>
        <span>Enter alphabet requested from your memorable information</span>

        <form onSubmit={handleSubmit}>
          <MIBox>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Select options={ miValue } />
                </div>
                <div className="col-md-4">
                  <Select required="required" options={ miValue } />
                </div>
                <div className="col-md-4">
                  <Select options={ miValue } />
                </div>
              </div>
            </div>
          </MIBox>
          <ButtonsBarContainer>
            <CustomButton type='submit'> Continue </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(MI);