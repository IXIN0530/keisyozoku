import useCalculate from "./hooks/useCalculate";

const CalculatePoint = ({ subjectAndPointList, setSubjectAndPointList }) => {
  const { sumPoint, handleClick } = useCalculate(subjectAndPointList, setSubjectAndPointList);

  return (
    <div className="calculate-point">
      <p className="sum-point">{sumPoint}</p>
      <button className="calculate-button" onClick={handleClick}>系所属点を計算</button>
    </div>
  )
}

export default CalculatePoint;