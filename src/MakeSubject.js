import SubjectTypeSelectBtn from "./SubjectTypeSelectBtn";
import useCreateForm from "./hooks/useCreateForm";

const MakeSubject = ({ data, setData }) => {
  const {
    isRequired,
    setIsRequired,
    nowSubject,
    score,
    subject,
    handleSubjectChange,
    handleScoreChange,
    handleSubmit,
  } = useCreateForm(data, setData);

  return (
    <>
      <p>科目選択と点数登録</p>
      <div className="Form">
        <SubjectTypeSelectBtn
          className="elective-btn"
          isSelected={!isRequired}
          onClick={() => setIsRequired(false)}
          text="選択"
        />
        <SubjectTypeSelectBtn
          className="required-btn"
          isSelected={isRequired}
          onClick={() => setIsRequired(true)}
          text="必修"
        />
        <select onChange={handleSubjectChange} value={subject} name="Select">
          {nowSubject.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <form onSubmit={handleSubmit} >
          <input
            onChange={handleScoreChange}
            className="point"
            required
            value={score}
            type="number"
            max={100}
            min={0}
            placeholder="入力"
          />
          <button className="resister-button">登録</button>
        </form>
      </div>
    </>
  );
}

export default MakeSubject;