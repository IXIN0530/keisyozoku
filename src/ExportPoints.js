import { useEffect } from "react";
const ExportPoints = ({ id, points, requiredOrElective, index, subjectAndPointList, setSubjectAndPointList, color }) => {
  const ItemDelete = () => {
    //直接stateを変更してはいけない。
    const _subjectAndPointList = [...subjectAndPointList];
    _subjectAndPointList.splice(index, 1);
    setSubjectAndPointList(_subjectAndPointList);
  }
  //点数によって背景色を変更する
  const ChangeColor = () => {
    if (points < 0 || points > 100 || color === "black") ItemDelete();
  }
  useEffect(() => {
    ChangeColor();
  }, [])
  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: requiredOrElective }}>{id}:</p>
      <p className="display-point" style={{ backgroundColor: color }}>{points}</p>
      <button className="delete-button" onClick={ItemDelete}>削除</button>
    </div>

  );
}

export default ExportPoints;