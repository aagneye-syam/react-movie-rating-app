import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<h1>HOME</h1>}/>
          <Route path="/auth" element={<h1>AUTH</h1>}/>
          <Route path="/rated" element={<h1>RATED</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
