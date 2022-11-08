import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
