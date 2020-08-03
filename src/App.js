import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import MIPage from './pages/mipage/mi.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]) 

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={SignInAndSignUpPage} />
        <Route path='/shop' component={HomePage} />
        <Route exact path='/mi' component={MIPage} />
        <Route
          exact
          path='/signin'
          render={() =>
              currentUser ? (
              <Redirect to='/shop' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);