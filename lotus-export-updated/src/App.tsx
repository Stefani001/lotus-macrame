import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductGrid />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
