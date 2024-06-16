import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Auth } from "./pages/auth";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<h1>RATED</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
