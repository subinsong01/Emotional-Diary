import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import usePageTitle from "../hooks/usePageTitle";
import Modal from '../components/Modal'; 

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext); 
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기 수정`);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalMessage, setModalMessage] = useState('');     
  const [onConfirmAction, setOnConfirmAction] = useState(null); 

  const openModal = (message, confirmAction) => {
    setModalMessage(message);
    setOnConfirmAction(() => confirmAction);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    openModal(
      "일기를 정말 삭제할까요?",
      () => {
        onDelete(params.id);
        navigate("/", { replace: true });
        closeModal();
      },
      "삭제하기", 
      "취소"    
    );
  };

  const onSubmit = (input) => {
    openModal(
      "일기를 정말 수정할까요?",
      () => {
        onUpdate(
          params.id,
          input.createdDate.getTime(),
          input.emotionId,
          input.content
        );
        navigate("/", { replace: true });
        closeModal();
      },
      "수정하기",  
      "취소"  
    );
  };

  return (
    <>
      <header>
        <Header 
          title={"일기 수정하기"}
          leftChild={<Button onClick={() => navigate(-1)} text={"< 뒤로가기"}/>}
          rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>}
        />
      </header>
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
      
      <Modal 
        isOpen={isModalOpen} 
        onConfirm={onConfirmAction} 
        onCancel={closeModal} 
        message={modalMessage}
        cancelText="취소"
        confirmText="확인"
      />
    </>
  );
};

export default Edit;
