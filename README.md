## 감정일기장 프로젝트

### 프로젝트 하면서 배운 부분
- **내가 개선한 부분**
```jsx
const DiaryItem = ({id, emotionId, createdDate, content}) =>{
  const nav = useNavigate();
  return(
    <div 
      onClick={() => nav(/diary/${id})}
      className="DiaryItem">
    <div 
      onClick={() => nav(/diary/${id})}
      className={img_section img_section_${emotionId}}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="button_section">
        <Button onClick={() => nav(/edit/${id})} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
```

<img width="550" alt="스크린샷 2025-02-24 오후 6 58 49" src="https://github.com/user-attachments/assets/49f8f513-601c-4ed8-9e02-292b374a77d2" />

이 부분에서 수정하기를 클릭해도 `diary:id`로 가는 문제가 생겼다. 강의에서는 잘 작동이 되었지만 나는 안됐다.🧐 <br />
부모 컴포넌트에서도 `onClick`을 실행시켜서 중복으로 발생하는 것 같았다.<br/>
 - `수정하기` 버튼을 누르면 `diary:id`로 넘어감
 - 뒤로가기를 누르면 `edit:id`로 넘어가는 부분에서 힌트를 얻었다.

**수정된 코드** 
```jsx
  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    nav(`/edit/${id}`);    
  };

   <div className="button_section">
    <Button onClick={handleButtonClick} text={"수정하기"} />
  </div>
```
✨**stopPropagation()**

- DOM 이벤트에서 이벤트 버블링 또는 이벤트 캡처링을 막기 위한 메서드
-------
- **feat**: 새로운 기능 추가 및 개선
- **style**: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- **design**: CSS 등 사용자 UI 디자인 변경
- **fix**: 기존 기능 수정
- **bug**: 버그 수정
- **refactor**: 결과의 변경 없이 코드의 구조를 재조정한 경우
- **test**: 테스트 코드 추가
- **docs**: 코드가 아닌 문서를 수정한 경우
- **remove**: 파일을 삭제하는 작업만 수행
- **rename**: 파일 또는 폴더명을 수정하거나 위치(경로)를 변경
- **asset**: 이미지 등 assets 파일 추가
- **chore**: 그 외 기타 수정

