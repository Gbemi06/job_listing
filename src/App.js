import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:company" element={<JobDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
