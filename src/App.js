import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Magic from './pages/Magic';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Layout from './Layout';

function App() {
  if (window.location.host.split(".")[0] == "magic") {
        return (
          <BrowserRouter>
            <Magic/>
          </BrowserRouter>
        );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="magic" element={<Magic />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;