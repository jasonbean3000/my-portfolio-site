import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Photo from './photo/Photo';
import Footer from './about/footer/Footer';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <header className='header'>
          <Header />
        </header>
        <div className='main-content-container'>
          <div className='photo-container-hidden'>
            <Photo />
          </div>
          <div className='main-content'>
            <Route path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </div>
          <div className='photo-container'>
            <Photo />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
