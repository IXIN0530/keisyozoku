import './App.css';
import { useState } from 'react';
import MakeSubject from './MakeSubject';
import ExportPoints from './ExportPoints';
function App() {
  const [subandpoint, setSubandPoint] = useState([]);
  return (
    <div className="App">
      <h1 className='Title'>系所属点数シュミレータ</h1>
      <MakeSubject subandpoint={subandpoint} setSubandPoint={setSubandPoint} />
      {subandpoint.length ? subandpoint.map((item, index) => <ExportPoints key={index} id={item.id} points={item.points} />)
        : (<p style={{ color: "gray" }}>まだ点数が保存されていません</p>)}
    </div>
  );
}
export default App;
