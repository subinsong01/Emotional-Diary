import './App.css'
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-image';

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="좋아요" />
        <img src={getEmotionImage(2)} alt="괜찮아요" />
        <img src={getEmotionImage(3)} alt="그냥그래요" />
        <img src={getEmotionImage(4)} alt="별로네요" />
        <img src={getEmotionImage(5)} alt="싫어요" />
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
