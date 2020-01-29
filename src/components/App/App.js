import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;