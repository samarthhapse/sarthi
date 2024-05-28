import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ThemeContext } from './context/theme';
import PageNotFound from './components/PageNotFound';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        button: theme.button,
        link: theme.link,
      }}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
