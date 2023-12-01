const useCreateDeleteMe = (data, setData) => {
  const createDeleteMe = (index) => {
    return () => {
      const _data = [...data];
      _data.splice(index, 1);
      setData(_data);
    }
  }

  return createDeleteMe;
}

export default useCreateDeleteMe;
