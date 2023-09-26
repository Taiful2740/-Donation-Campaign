const LocalData = () => {
  return (
    <div>
      <h1>hh</h1>
    </div>
  );
};

export default LocalData;

// eslint-disable-next-line react-refresh/only-export-components
export const getPieChartData = () => {
  const pieData = JSON.parse(localStorage.getItem("donations"));

  if (pieData?.length < 0) {
    return [];
  } else {
    return pieData;
  }
};
