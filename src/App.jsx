import './App.css'
import { useReducer, useRef, createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom"; 
import { useEffect } from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import NotFound from './pages/NotFound';

function reducer (state, action) {
  let nextState;

  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
      nextState =  [action.data, ...state];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) 
        ? action.id 
        : item
      );
      break;
    }
      case 'DELETE':
        {
        nextState = state.filter(
          (item) => String(item.id) === String(action.id)
        );
        break;
      }
      default:
        return state;
    }
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
  }

  export const DiaryStateContext = createContext(); //상태 값을 제공하는 Context
  export const DiaryDispatchContext = createContext(); //상태를 변경하는 dispatch 함수를 제공하는 Context
function App() {
  const[isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  
  useEffect(()=>{
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id)> maxId){
        maxId = Number(item.id);
      }
    })
    idRef.current = maxId;
    dispatch({
      type: 'INIT',
      data: parsedData,
    })
    setIsLoading(false);
  },[]);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate, 
        emotionId, 
        content
      },
    });
  };
  
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    })
  }
  if(isLoading) {
    <div>데이터 로딩중</div>
  }
  return (
  <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
  
  )
}

export default App;