import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AddStuffPage from "./pages/AddStuffPage";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/addstuff" element={<AddStuffPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
