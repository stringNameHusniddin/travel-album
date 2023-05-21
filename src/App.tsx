import Header from "./components/header";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <div id="pages" className="flex flex-col items-center justify-between">
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Services />} path='/services' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<About />} path='/about' />
      </Routes>
      <Header />
      <Footer/>
    </div>
  );
}

export default App;
