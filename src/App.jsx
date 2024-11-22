import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/login' element={<Auth/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
