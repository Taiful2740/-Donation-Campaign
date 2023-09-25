import { useEffect, useState } from "react";
import CardData from "../../Components/Header/AllCards/CardData";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState("");
  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donations"));

    if (donation) {
      setDonations(donation);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  console.log(donations);
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-5xl font-semibold">
          {noFound}
        </p>
      ) : (
        <div>
          <div>
            {donations.map((details, idx) => (
              <CardData key={idx} details={details}></CardData>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
