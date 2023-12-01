import useExportPoint from "./hooks/useExportPoint";

const ExportPoints = ({ subjectAndPoint, deleteMe }) => {
  const {
    subject,
    score,
    backgroundColor,
    scoreColor
  } = useExportPoint(subjectAndPoint, deleteMe);

  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: backgroundColor }}>{subject}:</p>
      <p className="display-point" style={{ backgroundColor: scoreColor }}>{score}</p>
      <button className="delete-button" onClick={deleteMe}>削除</button>
    </div>
  );
}

export default ExportPoints;