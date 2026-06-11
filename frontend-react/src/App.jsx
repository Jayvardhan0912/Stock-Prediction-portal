import "./assets/css/style.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
