import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import{Route,Routes} from 'react-router-dom'
import About from './router/About';
import Navbar from './router/link';
import Service from './router/service';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
      </Routes>
      <Navbar/>
     
    </div>
  );
}

export default App;
