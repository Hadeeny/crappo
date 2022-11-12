import CoinCard from "./components/CoinCard";
import Earn from "./components/Earn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Stats from "./components/Stats";
import Whyus from "./components/Whyus";

function App() {
  return (
    <div className="h-[100vh] text-white">
      <Header/>
      <Hero />
      <Stats />
      <Whyus />
      <Earn />
      <CoinCard />
      <Features />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
