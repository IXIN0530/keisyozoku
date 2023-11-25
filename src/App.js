import './App.css';
import { useState } from 'react';
import MakeSubject from './MakeSubject';
import ExportPoints from './ExportPoints';

function App() {
  const [subAndPoint, setSubAndPoint] = useState([]);

  return (
    <div className="App">
      <h1 className='Title'>系所属点数シュミレータ</h1>
      <MakeSubject subAndPoint={subAndPoint} setSubAndPoint={setSubAndPoint} />
      <div className='List'>
        {subAndPoint.length ? (
          subAndPoint.map((item, index) => <ExportPoints index={index} id={item.id} points={item.points} senorhi={item.senorhi} subAndPoint={subAndPoint} setSubAndPoint={setSubAndPoint} color={item.color} />
          )) : (
          <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
        )}
      </div>
    </div>
  );
}

export default App;