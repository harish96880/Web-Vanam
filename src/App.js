import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Landing_pages from "./pages/Landing_pages";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing_pages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
