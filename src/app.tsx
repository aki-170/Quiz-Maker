import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Results } from "./pages/results";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Quiz-Maker/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
