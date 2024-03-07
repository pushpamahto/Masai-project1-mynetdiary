import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Library from './Components/Pages/Library/Library';
import Food from './Components/Pages/Foods/Food';
import Feature from './Components/Pages/Features/Feature';
import Diets from './Components/Pages/Diets/Diets';
import Business from './Components/Pages/Business/Business';


function App() {
   return (
         <>
         <BrowserRouter>
         <Routes>

          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/feature' element={<Feature/>}></Route>
            <Route path='/diets' element={<Diets/>}></Route>
            <Route path='/library' element={<Library/>}></Route>
            <Route path='/food' element={<Food/>}></Route>
            <Route path='/business' element={<Business/>}></Route>

          </Route>

         </Routes>
         
         </BrowserRouter>
         
         </>
          )
          
  }
export default App;
