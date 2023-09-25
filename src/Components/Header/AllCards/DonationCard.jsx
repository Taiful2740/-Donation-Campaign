import { useEffect, useState } from "react";

import DonationPrice from "./DonationPrice";

const DonationCard = ({ details }) => {
  //   const { id, title, cover, price, description } = donationAllData || {};
  const [donationAllData, setDonationAllData] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");

  useEffect(() => {
    const donationData = JSON.parse(localStorage.getItem("donations"));

    if (donationData) {
      setDonationAllData(donationData);
    } else {
      setNoDataFound("No Donation Here !!!");
    }
  }, []);

  // console.log(donation);

  return (
    <div>
      {noDataFound ? (
        <p>{noDataFound}</p>
      ) : (
        <div className="max-w-screen-xl mx-auto mt-14">
          <div>
            {donationAllData?.map(card, idx => (
              <DonationPrice key={idx} details={details}></DonationPrice>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationCard;
