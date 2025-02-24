import './App.css'
import { Routes, Route } from "react-router-dom"; 
import Header from './components/Header';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import Button from './components/Button';

function App() {
  return (
    <>
    <Header 
      title={"Header"}
      leftChild={<Button text={"<"}/>}
      rightChild={<Button text={">"}/>} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  )
}

export default App
