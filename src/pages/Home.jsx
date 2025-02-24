import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotData, data) =>{
  const year = pivotData.getFullYear();
  const month = pivotData.getMonth();

  const beginTime = new Date(year, month, 1, 0, 0, 0).getTime();
  const endTime = new Date(year, month + 1, 0, 23, 59, 59).getTime();
  return data.filter(({ createdDate }) => createdDate >= beginTime && createdDate <= endTime);
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data); 

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return(
    <>
    <header>
      <Header 
        title={`${pivotDate.getFullYear()}년 
        ${pivotDate.getMonth() + 1 }월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
      />
    </header>
      <DiaryList data={monthlyData}/>
    </>
  );
};

export default Home;