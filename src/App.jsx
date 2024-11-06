import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

function App() {
  React.useEffect(() => {
    createPopup('hQG6LmMM', {
      hidden: { footer: true },
      customIcon: 'https://images.typeform.com/images/8RGvszEKMBLs',
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
