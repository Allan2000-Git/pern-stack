import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantEdit from './pages/RestaurantEdit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurants/:id" element={<RestaurantDetail/>} />
          <Route path="/restaurants/:id/edit" element={<RestaurantEdit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
