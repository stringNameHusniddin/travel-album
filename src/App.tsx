import Header from "./components/header";
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <div id="pages" className="flex items-center justify-center">
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Services />} path='/services' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<About />} path='/about' />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
