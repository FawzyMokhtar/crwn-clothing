import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInAndSignUpPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
};
