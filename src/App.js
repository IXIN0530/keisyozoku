import './App.css';
import MakeSubject from './MakeSubject';
import CalculatePoint from './CalculatePoint';
import DisplayScores from './DisplayScores';
import useSubjectAndPointList from './hooks/useSubjectAndPointList';

function App() {
  const [data, setData] = useSubjectAndPointList();

  return (
    <div className="App">
      <h1 className='Title'>系所属点数シュミレータ</h1>
      <MakeSubject data={data} setData={setData} />
      <DisplayScores data={data} setData={setData} />
      <CalculatePoint data={data} setData={setData} />
    </div>
  );
}

export default App;