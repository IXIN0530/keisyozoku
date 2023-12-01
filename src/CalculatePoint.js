import { useState } from "react";
const CalculatePoint = ({ subAndPoint, setSubAndPoint }) => {
  const [sumPoint, setSumPoint] = useState(0);
  //降順に並べ替える
  const Calculate = () => {
    setSumPoint(0);
    let _subAndPoint = [...subAndPoint];
    let sortedSubAndPoint = _subAndPoint.sort((item1, item2) => (parseInt(item1.points) <= parseInt(item2.points)) ? 1 : -1);
    sortedSubAndPoint = sortedSubAndPoint.sort((item1, item2) => (item1.senOrHi >= item2.senOrHi) ? 1 : -1);
    setSubAndPoint(sortedSubAndPoint);
    //系所属点数の算出
    var counter = 0;
    var hiCounter = 0;
    var senCounter = 0;
    subAndPoint.map((item, key) => {
      //選択科目が選択
      var tannisuu = 1;
      if (item.senOrHi == "rgb(183, 214, 255)") {
        //選択科目の場合
        if (item.id.includes("(2)")) {
          tannisuu = 2;
        }
        if (senCounter + tannisuu <= 14) {
          senCounter += tannisuu;
          counter += parseInt(item.points) * tannisuu;
        }
      }
      else {
        if (item.id.includes("(2)")) {
          tannisuu = 2;
        }
        if (hiCounter + tannisuu <= 17) {
          hiCounter += tannisuu;
          counter += parseInt(item.points) * tannisuu;
        }
      }
    });
    console.log("hiは", hiCounter, "senは", senCounter);
    console.log(subAndPoint);
    setSumPoint(counter);
  }
  return (
    <div className="calculate_point">
      <p className="sum_point">{sumPoint}</p>
      <button className="calculate_button" onClick={Calculate}>系所属点を計算</button>
    </div>
  )
}

export default CalculatePoint;