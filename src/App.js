import './App.css';
import MakeSubject from './MakeSubject';
import CalculatePoint from './CalculatePoint';
import DisplayScores from './DisplayScores';
import useSubjectAndPointList from './hooks/useSubjectAndPointList';

function App() {
  const [subjectAndPointList, setSubjectAndPointList] = useSubjectAndPointList();

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