import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardData from "../../Components/Header/AllCards/CardData";

const DetailsCard = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const detailsCards = useLoaderData();

  useEffect(() => {
    const findDetails = detailsCards?.find((card) => card.id == id);

    setDetails(findDetails);
  }, [id, detailsCards]);

  console.log(details);

  return (
    <div>
      <CardData details={details}></CardData>
    </div>
  );
};

export default DetailsCard;
