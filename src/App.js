// import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
// import Header from './header/Header';
import Home from './home/Home';
// import About from './about/About';
// import Projects from './projects/Projects';
// import Contact from './contact/Contact';
// import Photo from './photo/Photo';
// import Footer from './footer/Footer';

function App() {
  return (
    
      <div className='app-container'>
        
        <div className='main-content-container'>
          <div className='main-content'>
           
              <Home />
            
          </div>
         
        </div>
       
      </div>
    
  );
}

export default App;
