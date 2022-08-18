import Footer from "./components/no/Footer";
import About from "./components/no/About";
import Header from "./components/no/Header";
import Home from "./components/no/Home";
import Create from "./components/no/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Board from "./components/new/Board";

function App() {
  return (
      <div className="wrap">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
