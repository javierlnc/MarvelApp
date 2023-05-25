import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"; 
import Characters from "./Routes/Characters";
import Navbar from "./Components/Navbar";
import "./App.css";


function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
