
import { Routes,Route } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




function App() {

  return (
    <>
  <ToastContainer position="top-right" autoClose={5000}
theme="colored"/>
<Header/>

<Routes>
  <Route element={<Landing/> } path='/'/>
<Route element={<Home/>} path='/Home'/>
<Route element={<History/>}path='/History'/>


</Routes>
<Footer/>
    </>
  )
}

export default App
