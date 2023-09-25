import { useParams } from "react-router-dom";

const DetailsCard = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>show details</h1>
    </div>
  );
};

export default DetailsCard;
