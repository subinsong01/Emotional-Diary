import './App.css'
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import emotion1 from './assets/emotion1.png';
import emotion2 from './assets/emotion2.png';
import emotion3 from './assets/emotion3.png';
import emotion4 from './assets/emotion4.png';
import emotion5 from './assets/emotion5.png';

function App() {
  return (
    <>
      <div>
        <img src={emotion1} alt="좋아요" />
        <img src={emotion2} alt="괜찮아요" />
        <img src={emotion3} alt="그냥그래요" />
        <img src={emotion4} alt="별로네요" />
        <img src={emotion5} alt="싫어요" />
      </div>
      
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
