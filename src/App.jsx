import "./App.css";
import Business from "./components/Business";
import Company from "./components/company";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
// import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
// import { Button } from "./components/ui/button";
// import PillNav from "./components/ui/PillNav";
function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Hero />
        <Intro />
        <Company />
        <Business />
        <Form />
      </div>
    </>
  );
}

export default App;
