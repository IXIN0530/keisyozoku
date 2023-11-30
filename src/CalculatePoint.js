import { useState } from "react";
const CalculatePoint = ({ subAndPoint, setSubAndPoint }) => {
  const [sumPoint, setSumPoint] = useState(0);
  //降順に並べ替える
  const Calculate = () => {
    setSumPoint(0);
    let _subAndPoint = [...subAndPoint];
    let sorted_subAndPoint = _subAndPoint.sort((item1, item2) => (parseInt(item1.points) <= parseInt(item2.points)) ? 1 : -1);
    sorted_subAndPoint = sorted_subAndPoint.sort((item1, item2) => (item1.senorhi >= item2.senorhi) ? 1 : -1);
    setSubAndPoint(sorted_subAndPoint);
    //系所属点数の算出
    var counter = 0;
    var hi_counter = 0;
    var sen_counter = 0;
    subAndPoint.map((item, key) => {
      //選択科目が選択
      var tannisuu = 1;
      if (item.senorhi == "rgb(183, 214, 255)") {
        //選択科目の場合
        if (item.id.includes("(2)")) {
          tannisuu = 2;
        }
        if (sen_counter + tannisuu <= 14) {
          sen_counter += tannisuu;
          counter += parseInt(item.points) * tannisuu;
        }
      }
      else {
        if (item.id.includes("(2)")) {
          tannisuu = 2;
        }
        if (hi_counter + tannisuu <= 17) {
          hi_counter += tannisuu;
          counter += parseInt(item.points) * tannisuu;
        }
      }
    });
    console.log("hiは", hi_counter, "senは", sen_counter);
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