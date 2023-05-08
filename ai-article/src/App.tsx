import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import Home from "./pages/Home";
import Login from './pages/Login';
import "./assets/scss/app.scss";
import ArticleAdd from "./pages/ArticleAdd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/article-add" element={<ArticleAdd />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
