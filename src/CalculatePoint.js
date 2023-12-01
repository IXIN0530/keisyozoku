import { useState } from "react";
const CalculatePoint = ({ subjectAndPointList, setSubjectAndPointList }) => {
  const [sumPoint, setSumPoint] = useState(0);
  //降順に並べ替える
  const Calculate = () => {
    setSumPoint(0);
    let _subjectAndPointList = [...subjectAndPointList];
    let sortedSubAndPoint = _subjectAndPointList.sort((item1, item2) => (parseInt(item1.points) <= parseInt(item2.points)) ? 1 : -1);
    sortedSubAndPoint = sortedSubAndPoint.sort((item1, item2) => (item1.requiredOrElective >= item2.requiredOrElective) ? 1 : -1);
    setSubjectAndPointList(sortedSubAndPoint);
    //系所属点数の算出
    var sum = 0;
    var requiredCredits = 0;
    var electiveCredits = 0;
    subjectAndPointList.map((item, key) => {
      //選択科目が選択
      /**
       * 科目当たりの単位数
       */
      var credits = 1;
      if (item.requiredOrElective == "rgb(183, 214, 255)") {
        //選択科目の場合
        if (item.id.includes("(2)")) {
          credits = 2;
        }
        if (electiveCredits + credits <= 14) {
          electiveCredits += credits;
          sum += parseInt(item.points) * credits;
        }
      }
      else {
        if (item.id.includes("(2)")) {
          credits = 2;
        }
        if (requiredCredits + credits <= 17) {
          requiredCredits += credits;
          sum += parseInt(item.points) * credits;
        }
      }
    });
    console.log(`必修科目は${requiredCredits}単位、選択科目は${electiveCredits}単位取得`);
    console.log(subjectAndPointList);
    setSumPoint(sum);
  }
  return (
    <div className="calculate-point">
      <p className="sum-point">{sumPoint}</p>
      <button className="calculate-button" onClick={Calculate}>系所属点を計算</button>
    </div>
  )
}

export default CalculatePoint;