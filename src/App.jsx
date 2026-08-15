import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leader from './components/Leader';
import Programs from './components/Programs';
import Books from './components/Books.jsx';
import WallOfFame from './components/WallOfFame';
import Achievements from './components/Achievements';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

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
        <WallOfFame />
        <Achievements />
        <Events />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
}

export default App;
