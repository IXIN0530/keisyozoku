import './App.css';
import { useEffect, useRef, useState } from 'react';
import MakeSubject from './MakeSubject';
import ExportPoints from './ExportPoints';
import CalculatePoint from './CalculatePoint';

function App() {
  const [subAndPoint, setSubAndPoint] = useState([]);
  //初手だけ読み込み処理をする。
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      const json = localStorage.getItem("sub_and_point");
      if (json) {
        const array = JSON.parse(json);
        setSubAndPoint(array);
      }
    }
    else {
      if (subAndPoint.length) {
        const json = JSON.stringify(subAndPoint);
        localStorage.setItem("sub_and_point", json);
      }
      else {
        localStorage.removeItem("sub_and_point");
      }
    }
  }
    , [subAndPoint])
  return (
    <div className="App">
      <h1 className='Title'>系所属点数シュミレータ</h1>
      <MakeSubject subAndPoint={subAndPoint} setSubAndPoint={setSubAndPoint} />
      <div className='List'>
        {subAndPoint.length ? (
          subAndPoint.map((item, index) => <ExportPoints
            index={index}
            id={item.id}
            points={item.points}
            requiredOrElective={item.requiredOrElective}
            subAndPoint={subAndPoint}
            setSubAndPoint={setSubAndPoint}
            color={item.color} />
          )) : (
          <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
        )}
      </div>

      <CalculatePoint subAndPoint={subAndPoint} setSubAndPoint={setSubAndPoint} />
    </div>
  );
}

export default App;