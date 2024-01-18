import './App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Footer from './Footer';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Home />
        <About />
        <Service />
        
      </div>
<Footer />
    </div>
  );
}

export default App;
