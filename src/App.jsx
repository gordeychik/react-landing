import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Training } from "./components/Training/Training";
import { Stories } from "./components/Stories/Stories";
import { Tariff } from "./components/Tariff/Tariff";
import { Bonus } from "./components/Bonus/Bonus";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Training />
      <Stories />
      <Tariff />
      <Bonus />
      <Footer />
    </>
  );
}

export default App;
