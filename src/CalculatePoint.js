import { useState } from "react";
const CalculatePoint = ({ subAndPoint, setSubAndPoint }) => {
  const [sumPoint, setSumPoint] = useState(0);
  //降順に並べ替える
  const Calculate = () => {
    setSumPoint(0);
    let _subAndPoint = [...subAndPoint];
    let sorted_subAndPoint = _subAndPoint.sort((item1, item2) => (item1.points < item2.points) ? 1 : (item1.points > item2.points) ? -1 : 0);
    setSubAndPoint(sorted_subAndPoint);
    console.log(subAndPoint);
    subAndPoint.map((item) => { setSumPoint(sumPoint + parseInt(item.points)) });
  }
  return (
    <div className="calculate_point">
      <p className="sum_point">{sumPoint}</p>
      <button onClick={Calculate}>計算</button>
    </div>
  )
}

export default CalculatePoint;