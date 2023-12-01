const ExportPoints = ({ subjectAndPoint, deleteMe }) => {
  const { isRequired, subject, score } = subjectAndPoint;

  const backgroundColor = isRequired ? "rgb(255, 153, 153)" : "rgb(183, 214, 255)";
  let scoreColor = "black";

  if (score < 60) {
    scoreColor = "rgb(180, 180, 164)";
  } else if (score < 80) {
    scoreColor = "white";
  } else if (score < 90) {
    scoreColor = "rgb(142, 255, 232)";
  } else if (score < 95) {
    scoreColor = "rgb(115, 230, 136)";
  } else if (score <= 100) {
    scoreColor = "rgb(63, 255, 19)";
  } else {
    deleteMe();
  }

  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: backgroundColor }}>{subject}:</p>
      <p className="display-point" style={{ backgroundColor: scoreColor }}>{score}</p>
      <button className="delete-button" onClick={deleteMe}>削除</button>
    </div>
  );
}

export default ExportPoints;