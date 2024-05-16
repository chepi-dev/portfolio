import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NoteProject from "./Pages/NoteProject";

function App() {
  return (
    <Router>
      <div className="bg-yellow" style={{ height: "100vh", overflow: "auto" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<NoteProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
