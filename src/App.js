import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import MyStuffPage from './pages/MyStuffPage';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/mystuff' element={<MyStuffPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
