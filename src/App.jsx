import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
