import { Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
};
