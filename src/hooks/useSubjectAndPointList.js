import { useEffect, useRef, useState } from "react";

const useSubjectAndPointList = () => {
  const [subjectAndPointList, setSubjectAndPointList] = useState([]);

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      const json = localStorage.getItem("sub_and_point");
      if (json) {
        const array = JSON.parse(json);
        setSubjectAndPointList(array);
      }
    }
    else {
      if (subjectAndPointList.length) {
        const json = JSON.stringify(subjectAndPointList);
        localStorage.setItem("sub_and_point", json);
      }
      else {
        localStorage.removeItem("sub_and_point");
      }
    }
  }, [subjectAndPointList]);

  return [subjectAndPointList, setSubjectAndPointList];
}

export default useSubjectAndPointList