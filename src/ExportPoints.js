const ExportPoints = ({ id, points }) => {
  return (
    <div className="">
      <p className="subject">{id}:</p>
      <p className="display_point">{points}</p>
      <button>削除</button>
    </div>
  );
}

export default ExportPoints;