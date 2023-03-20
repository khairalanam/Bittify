import "./App.css";
import ExchangeSection from "./components/ExchangeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <Navbar />
        <HeroSection />
      </div>
      <ExchangeSection />
    </div>
  );
}

export default App;
