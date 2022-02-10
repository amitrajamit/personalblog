import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Counter/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
