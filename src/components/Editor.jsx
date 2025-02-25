import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState } from 'react';

const EmotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음'
  },
  {
    emotionId: 2,
    emotionName: '좋음'
  },
  {
    emotionId: 3,
    emotionName: '그럭 저럭'
  },
  {
    emotionId: 4,
    emotionName: '나쁨'
  },
  {
    emotionId: 5,
    emotionName: '끔찍'
  },
];

const getStringedDate = (targetDate) => {
  //날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let day = targetDate.getDate();

  if(month < 10){
    month = `0${month}`;
  }
  if(day < 10){
    day = `0${day}`;
  }

  return `${year} ${month} ${day}`;
};
const Editor = () => {
  const [input, setInput] = useState({
    createdDate : new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;
    
    if(name === 'createdDate'){
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    })
  }
  const emotionId = 3;

  return(
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input  name="createdDate" onChange={onChangeInput} defaultValue={getStringedDate(input.createdDate)} type='date' />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {EmotionList.map((item)=>(
            <EmotionItem 
              key={item.emotionId} 
              emotionId={item.emotionId} {...item} 
              isSelected={item.emotionId === emotionId}/>
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘 하루는 어떠셨나요?' />
      </section>
      <section className='button_section'>
        <Button text={"취소하기"}/>
        <Button text={"작성완료"} type={"POSITIVE"}/>
      </section>
    </div>
  )
};
export default Editor;