import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
