import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import JobDetails from "./components/JobDetails";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorite from "./components/Favorite";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:company" element={<JobDetails />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
