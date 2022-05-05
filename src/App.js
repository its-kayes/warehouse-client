import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/GetIn/Login';
import Register from './components/GetIn/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyItems from './components/MyItems/MyItems';
import Inventory from './components/Inventory/Inventory';
import InventoryDetails from './components/Inventory/InventoryDetails';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddItemToDb from './components/ManageInventory/AddItemToDb';
import Blogs from './components/About/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}>  </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/inventory' element={<Inventory></Inventory>}> </Route>
        <Route path='/additemtodb' element={
          <RequireAuth>
            <AddItemToDb></AddItemToDb>
          </RequireAuth>}> </Route>

        <Route path='/inventory/:id' element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}> </Route>

        <Route path='/manageinventories' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>

        <Route path='/myitems' element={<RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}> </Route>

        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
