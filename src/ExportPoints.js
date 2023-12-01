import { useEffect } from "react";
const ExportPoints = ({ id, points, senOrHi, index, subAndPoint, setSubAndPoint, color }) => {
  const ItemDelete = () => {
    //直接stateを変更してはいけない。
    const _subAndPoint = [...subAndPoint];
    _subAndPoint.splice(index, 1);
    setSubAndPoint(_subAndPoint);
  }
  //点数によって背景色を変更する
  const ChangeColor = () => {
    if (points < 0 || points > 100 || color == "black") ItemDelete();
  }
  useEffect(() => {
    ChangeColor();
  }, [])
  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: senOrHi }}>{id}:</p>
      <p className="display-point" style={{ backgroundColor: color }}>{points}</p>
      <button className="delete-button" onClick={ItemDelete}>削除</button>
    </div>

  );
}

export default ExportPoints;