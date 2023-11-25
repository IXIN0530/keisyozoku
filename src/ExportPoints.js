import { useEffect } from "react";
const ExportPoints = ({ id, points, senorhi, index, subAndPoint, setSubAndPoint }) => {

  const ItemDelete = () => {
    //直接stateを変更してはいけない。
    const _subAndPoint = [...subAndPoint];
    _subAndPoint.splice(index, 1);
    setSubAndPoint(_subAndPoint);
  }
  //点数によって背景色を変更する
  const ChangeColor = () => {
    if (points < 0 || points > 100) ItemDelete();
  }

  useEffect(() => {
    ChangeColor();
  }, [])
  return (
    <div className="subandpoint">
      <p className="subject" style={{ backgroundColor: senorhi }}>{id}:</p>
      <p className="display_point" style={{ backgroundColor: "rgb(160, 160, 160)" }}>{points}</p>
      <button className="delete_button" onClick={ItemDelete}>削除</button>
    </div>

  );
}

export default ExportPoints;