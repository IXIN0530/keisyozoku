const useExportPoint = ({ isRequired, subject, score }, deleteMe) => {
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

  return { subject, score, backgroundColor, scoreColor }
}

export default useExportPoint