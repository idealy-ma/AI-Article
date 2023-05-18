import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import HomeAdmin from "./pages/HomeAdmin";
import Login from './pages/Login';
import "./assets/scss/app.scss";
import LaptopAdd from "./pages/LaptopAdd";
import Index from "./pages/Index";
import AddPointStore from "./pages/AddPointStore";
import StoreList from "./pages/StoreList";
import UserAdd from "./pages/users/UserAdd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<HomeAdmin />}/>

          <Route path="/add-laptop" element={<LaptopAdd />}/>
          {/** store route */}
          <Route path="/add-store" element={<AddPointStore />}/>
          <Route path="/store-list" element={<StoreList />}/>
          {/** user route */}
          <Route path="/user-add" element={<UserAdd />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
