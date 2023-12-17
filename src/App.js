import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./components/component.css";
import About from "./components/About";
import Alumni from "./components/Alumni/Alumni";
import Events from "./components/Events/Events";
import Notice from "./components/Notices/Notice";
import Forms from "./components/Forms/Forms";
import Support from "./components/Support/Support";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div id="app">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/alumni" element={<Alumni/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="notice/" element={<Notice/>}></Route>
          <Route path="/forms" element={<Forms/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
