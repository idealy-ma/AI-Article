import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import HomeAdmin from "./pages/HomeAdmin";
import Login from './pages/Login';
import "./assets/scss/app.scss";
import LaptopAdd from "./pages/LaptopAdd";
import Index from "./pages/Index";
import AddPointStore from "./pages/AddPointStore";
import StoreList from "./pages/StoreList";
import UserAdd from "./pages/users/UserAdd";
import UserList from "./pages/users/UserList";
import UserAffect from "./pages/users/UserAffect";

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
          <Route path="/user-list" element={<UserList />}/>
          <Route path="/user-affect/:id" element={<UserAffect />}/>
          {/** stock route*/}
          <Route path="/stock-buy" element={<UserList />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
