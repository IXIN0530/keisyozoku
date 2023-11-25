const ExportPoints = ({ id, points }) => {
  return (
    <div className="">
      <p style={{ backgroundColor: "goldenrod" }}>{id}:</p>
      <p style={{ display: "inline", backgroundColor: "gold" }}>{points}</p>
      <button>削除</button>
    </div>
  );
}

export default ExportPoints;