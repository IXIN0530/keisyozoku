import './App.css';
import { useEffect, useRef, useState } from 'react';
import MakeSubject from './MakeSubject';
import ExportPoints from './ExportPoints';
import CalculatePoint from './CalculatePoint';

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
      <MakeSubject subjectAndPointList={subjectAndPointList} setSubjectAndPointList={setSubjectAndPointList} />
      <div className='List'>
        {subjectAndPointList.length ? (
          subjectAndPointList.map((item, index) =>
            <ExportPoints
              index={index}
              subject={item.subject}
              score={item.score}
              backgroundColor={item.backgroundColor}
              color={item.color}
              subjectAndPointList={subjectAndPointList}
              setSubjectAndPointList={setSubjectAndPointList}
            />
          )) : (
          <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
        )}
      </div>
      <CalculatePoint subjectAndPointList={subjectAndPointList} setSubjectAndPointList={setSubjectAndPointList} />
    </div>
  );
}

export default App;