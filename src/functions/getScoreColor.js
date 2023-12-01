const getScoreColor = (score) => {
  if (score < 60) {
    return "rgb(180, 180, 164)";
  } else if (score < 80) {
    return "white";
  } else if (score < 90) {
    return "rgb(142, 255, 232)";
  } else if (score < 95) {
    return "rgb(115, 230, 136)";
  } else if (score <= 100) {
    return "rgb(63, 255, 19)";
  }
}

export default getScoreColor;
