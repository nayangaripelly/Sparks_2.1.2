import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './pages/Profile'
import AddBeat from './pages/AddBeat'
import BuyBeat from './pages/BuyBeat'
import NavBar from './components/NavBar'
import Chat from './pages/Chat';
import Home from './pages/Home';

function App() {
  return (
    <>
    <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/buyBeat" element={<BuyBeat />}></Route>
          <Route path="/addBeat" element={<AddBeat />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
