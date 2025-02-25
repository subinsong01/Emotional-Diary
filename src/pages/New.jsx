import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
const New = () => {
  return(
  <div>
    <header>
      <Header title={"새 일기 작성하기"}
      leftChild={<Button text={"< 뒤로가기"}/>} />
    </header>
    <Editor />
  </div>
  )
}

export default New;