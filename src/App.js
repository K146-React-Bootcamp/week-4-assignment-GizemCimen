import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavbar from './Components/TopNavBar';
import { ThemeProvider } from './Context/ThemeContext';
import Features from './Pages/Features';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Pricing from './Pages/Pricing';
//import ThemeContext from './Components/Context';
//import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <TopNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
         
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
//     <ThemeContext>
// //     <Header/>          
// // </ThemeContext>
  );
}


export default App;