const setData = (data) => {
  localStorage.setItem("questions-data", JSON.stringify(data));
};

const getData = () => {
  return JSON.parse(localStorage.getItem("questions-data"));
};

const removeData = () => {
  localStorage.removeItem("questions-data");
};

export { setData, getData, removeData };
