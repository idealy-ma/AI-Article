import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import HomeAdmin from "./pages/HomeAdmin";
import Login from './pages/Login';
import "./assets/scss/app.scss";
import ArticleAdd from "./pages/ArticleAdd";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<HomeAdmin />}/>
          <Route path="/article-add" element={<ArticleAdd />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
