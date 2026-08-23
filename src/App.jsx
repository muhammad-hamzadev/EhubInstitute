import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-the-fold components lazy loaded on demand for maximum performance (<15 KiB initial JS)
const About = lazy(() => import('./components/About'));
const Leader = lazy(() => import('./components/Leader'));
const Programs = lazy(() => import('./components/Programs'));
const Books = lazy(() => import('./components/Books.jsx'));
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
        <Suspense fallback={null}>
          <About />
          <Leader />
          <Programs />
          <Books />
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
