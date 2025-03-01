import './App.css'
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import NotFound from './pages/NotFound';

const mockData = [
  {
    id : 1,
    createdDate : new Date("2025-02-24").getTime(),
    emotionId: 1,
    content: "기분 째짐"
  },
  {
    id : 2,
    createdDate : new Date("2025-02-23").getTime(),
    emotionId: 2,
    content: "기분 ㅂㄹ"
  },
  {
    id : 3,
    createdDate : new Date("2024-01-23").getTime(),
    emotionId: 3,
    content: "기분 ㅂㄹ"
  },
];

function reducer (state, action) {
  let nextState;

  switch(action.type) {
    case 'CREATE':{
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE':
      {nextState = state.map((item) =>
        String(item.id) === String(action.data.id) 
        ? action.id 
        : item
      );
      break;
    };
      case 'DELETE':
        {nextState = state.filter(
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
  const [data, dispatch] = useReducer(reducer, mockData);
  const isRef = useRef(3);

  //localStorage.setItem('test', "hello"); //key, value
  // console.log(localStorage.getItem('test'));

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id : isRef.current++,
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