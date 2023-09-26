import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { getPieChartData } from "../../Components/LocalData/LocalData";
import { useEffect, useState } from "react";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontWeight: "700", fontSize: "25px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  const dataLoad = useLoaderData();
  const totalDonation = dataLoad.length;

  const [myDonation, setMyDonation] = useState(0);
  const data = [
    { name: "Total Donation", value: totalDonation },
    { name: "Your Donation", value: myDonation },
  ];
  useEffect(() => {
    const getDataLoad = getPieChartData();
    setMyDonation(getDataLoad?.length);
  }, []);

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
