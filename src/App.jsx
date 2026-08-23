import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leader from './components/Leader';
import Programs from './components/Programs';
import Books from './components/Books.jsx';

// Below-the-fold components lazy loaded on demand for minimal initial JS payload
const WallOfFame = lazy(() => import('./components/WallOfFame'));
const Achievements = lazy(() => import('./components/Achievements'));
const Events = lazy(() => import('./components/Events'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const AIChatbot = lazy(() => import('./components/AIChatbot'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leader />
        <Programs />
        <Books />
        <Suspense fallback={null}>
          <WallOfFame />
          <Achievements />
          <Events />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <AIChatbot />
      </Suspense>
    </>
  );
}

export default App;
