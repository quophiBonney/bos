import'./App.module.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Home from '../src/pages/Home';
import Navigation from '../src/components/Navigation';
import Error from '../src/pages/Error';
function App() {
  AOS.init();
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/auth/login" element={<Login/>}/>
     <Route path="/auth/signup" element={<Signup/>}/>
     <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
