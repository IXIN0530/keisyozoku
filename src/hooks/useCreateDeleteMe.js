const useCreateDeleteMe = (subjectAndPointList, setSubjectAndPointList) => {
  const createDeleteMe = (index) => {
    return () => {
      const _subjectAndPointList = [...subjectAndPointList];
      _subjectAndPointList.splice(index, 1);
      setSubjectAndPointList(_subjectAndPointList);
    }
  }

  return createDeleteMe;
}

export default useCreateDeleteMe;
