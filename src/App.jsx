import "./App.css";

import { Home } from "./pages/Home.page";
import { Navbar } from "./components/navcomponent/Navbar";
import { Chardetails } from "./components/eachcharacterdetails/Eachchar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Chardetails />
    </>
  );
};

export default App;
