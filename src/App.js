import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasis from './components/StateBasis';
import Counter from './components/Counter';
import Signup from './components/Signup';
import UseEffect from './components/UseEffect';
import { Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="navbar" element={<Navbar/>}/>
      </Routes>
      {/* <Login/> */}
      {/* <StateBasis/> */}
      {/* <Counter/> */}
      {/*<Signup></Signup> */}
      <UseEffect></UseEffect>
       </div>
  );
}

export default App;
