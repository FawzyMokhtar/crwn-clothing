import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';

import './App.css';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class AppComponent extends React.Component {
  unsubscribeFromAuth = null;

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/sign-in'
            element={
              currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage />
            }
          />
          <Route path='/shop' element={<ShopPage />} />
        </Routes>
      </div>
    );
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  async componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
