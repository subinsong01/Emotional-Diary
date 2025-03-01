import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useParams } from 'react-router-dom';
import { useNavigate } from'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext); 
  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if(window.confirm('일기를 정말 삭제할까요? 삭제된 일기는 복구가 불가능해요!')){
      //일기 삭제 로직
      onDelete(params.id);
      navigate("/", {replace: true});
    }
  };

  const onSubmit = (input) => {
    if(
      window.confirm('일기를 정말 수정할까요?')){
    onUpdate(
      params.id,
      input.createdDate.getTime(), 
      input.emotionId, 
      input.content
    );
    navigate("/", {replace: true});
  };
  }

  return (
    <>
    <header>
      <Header 
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => navigate(-1)} text={"< 뒤로가기"}/>}
        rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>}
        />
    </header>
    <Editor initData={curDiaryItem} onSubmit={onSubmit}/> 
    </>
  )
}
export default Edit;