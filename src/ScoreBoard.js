import getScoreColor from "./functions/getScoreColor";

const ScoreBoard = ({ subjectAndPoint, deleteMe }) => {
  const { isRequired, subject, score } = subjectAndPoint;
  const backgroundColor = isRequired ? "rgb(255, 153, 153)" : "rgb(183, 214, 255)";
  const scoreColor = getScoreColor(score);

  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: backgroundColor }}>{subject}:</p>
      <p className="display-point" style={{ backgroundColor: scoreColor }}>{score}</p>
      <button className="delete-button" onClick={deleteMe}>削除</button>
    </div>
  );
}

export default ScoreBoard;