import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Header from './Components/Header'
import Footer from './Components/Footer'
import User_Dashboard from './Pages/User_Dashboard'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/dashboard' element={<User_Dashboard/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
