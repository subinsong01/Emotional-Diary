import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from 'react-router-dom';
const New = () => {
  const navigate = useNavigate();

  return(
  <div>
    <header>
      <Header title={"새 일기 작성하기"}
      leftChild={<Button onClick={() => navigate(-1)} text={"< 뒤로가기"}/>} />
    </header>
    <Editor />
  </div>
  )
}

export default New;