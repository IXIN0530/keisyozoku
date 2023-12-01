import { useState } from "react";
const CalculatePoint = ({ subjectAndPointList, setSubjectAndPointList }) => {
  const [sumPoint, setSumPoint] = useState(0);

  const sortData = () => {
    const _subjectAndPointList = [...subjectAndPointList];
    const sortedSubAndPoint = _subjectAndPointList.sort((item1, item2) => (parseInt(item1.score) <= parseInt(item2.score)) ? 1 : -1);
    setSubjectAndPointList(sortedSubAndPoint);
  }

  const calculateScoreAndCredits = () => {
    //系所属点数の算出
    let sum = 0;
    let requiredCredits = 0;
    let electiveCredits = 0;
    subjectAndPointList.forEach((item, key) => {
      /**
       * 科目当たりの単位数
       */
      let credits = 1;
      if (!item.isRequired) {
        //選択科目の場合
        if (item.subject.includes("(2)")) {
          credits = 2;
        }
        if (electiveCredits + credits <= 14) {
          electiveCredits += credits;
          sum += parseInt(item.score) * credits;
        }
      }
      else {
        if (item.subject.includes("(2)")) {
          credits = 2;
        }
        if (requiredCredits + credits <= 17) {
          requiredCredits += credits;
          sum += parseInt(item.score) * credits;
        }
      }
    });
    console.log(`必修科目は${requiredCredits}単位、選択科目は${electiveCredits}単位取得`);
    console.log(subjectAndPointList);
    setSumPoint(sum);
  }

  const handleClick = () => {
    sortData();
    calculateScoreAndCredits();
  }

  return (
    <div className="calculate-point">
      <p className="sum-point">{sumPoint}</p>
      <button className="calculate-button" onClick={handleClick}>系所属点を計算</button>
    </div>
  )
}

export default CalculatePoint;