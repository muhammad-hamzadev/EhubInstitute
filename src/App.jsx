import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leader from './components/Leader';
import Programs from './components/Programs';
import Books from './components/Books.jsx';
import Footer from './components/Footer';

// Only heavy interactive components (modals, swipers, chatbot) are lazy loaded
const WallOfFame = lazy(() => import('./components/WallOfFame'));
const Achievements = lazy(() => import('./components/Achievements'));
const Events = lazy(() => import('./components/Events'));
const Contact = lazy(() => import('./components/Contact'));
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
      <Footer />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </>
  );
}

export default App;
