
import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import Home from "./pages/Home";
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
