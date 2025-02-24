import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import './DiaryItem.css'
import { useNavigate } from 'react-router-dom';
const DiaryItem = ({id, emotionId, createdDate, content}) =>{
  const nav = useNavigate();

    const handleButtonClick = (e) => {
      e.stopPropagation();  
      nav(`/edit/${id}`);    
    };

  return(
    <div 
      onClick={() => nav(`/diary/${id}`)}
      className="DiaryItem">
    <div 
      onClick={() => nav(`/diary/${id}`)}
      className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className='created_date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content'>
          {content}
        </div>
      </div>
      <div className="button_section">
        <Button  onClick={handleButtonClick} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;