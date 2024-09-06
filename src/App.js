import './App.css';
import { HashRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { router } from './Routes';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className='relative'>
      <HashRouter>
        <Navigation />
        <Header />
        {router}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
