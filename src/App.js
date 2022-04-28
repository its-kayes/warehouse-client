import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/home' element={<Home></Home>}>  </Route>
          <Route path='/about' element={<About></About>}> </Route>
        </Routes>
    </div>
  );
}

export default App;
