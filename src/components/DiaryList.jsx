import Button from './Button';
import './DiaryList.css';
import DiaryItem from './DiaryItem';
const DiaryList = () => {
  return(
    <>
    <div className="DiaryList">
      <section className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"일기 작성하기"} type={"POSITIVE"} />
      </section>
      <section className="list_wrapper">
        <DiaryItem />
      </section>
    </div>
    </>
  );
};

export default DiaryList;