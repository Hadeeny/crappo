import CoinCard from "./components/CoinCard";
import Earn from "./components/Earn";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Whyus from "./components/Whyus";

function App() {
  return (
    <div className="h-[100vh] text-white">
      <Hero />
      <Stats />
      <Whyus />
      <Earn />
      <CoinCard />
    </div>
  );
}

export default App;
