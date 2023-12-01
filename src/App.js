import './App.css';
import { useEffect, useRef, useState } from 'react';
import MakeSubject from './MakeSubject';
import CalculatePoint from './CalculatePoint';
import DisplayScores from './DisplayScores';

function App() {
  const [subjectAndPointList, setSubjectAndPointList] = useState([]);
  //初手だけ読み込み処理をする。
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      const json = localStorage.getItem("sub_and_point");
      if (json) {
        const array = JSON.parse(json);
        setSubjectAndPointList(array);
      }
    }
    else {
      if (subjectAndPointList.length) {
        const json = JSON.stringify(subjectAndPointList);
        localStorage.setItem("sub_and_point", json);
      }
      else {
        localStorage.removeItem("sub_and_point");
      }
    }
  }
    , [subjectAndPointList])
  return (
    <div className="App">
      <h1 className='Title'>系所属点数シュミレータ</h1>
      <MakeSubject
        subjectAndPointList={subjectAndPointList}
        setSubjectAndPointList={setSubjectAndPointList}
      />
      <DisplayScores
        subjectAndPointList={subjectAndPointList}
        setSubjectAndPointList={setSubjectAndPointList}
      />
      <CalculatePoint
        subjectAndPointList={subjectAndPointList}
        setSubjectAndPointList={setSubjectAndPointList}
      />
    </div>
  );
}

export default App;