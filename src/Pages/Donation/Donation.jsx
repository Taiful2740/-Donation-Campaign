import { useEffect, useState } from "react";
import DonationCard from "../../Components/Header/AllCards/DonationCard";
// import CardData from "../../Components/Header/AllCards/CardData";

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

  const handleRemove = () => {
    localStorage.clear([]);
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-5xl font-semibold">
          {noFound}
        </p>
      ) : (
        <div>
          {donations.length > 0 && (
            <button
              onClick={handleRemove()}
              className="px- bg-[#FF444A] block mx-auto"
            >
              Clear Donations
            </button>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {donations.map((details, idx) => (
              <DonationCard key={idx} details={details}></DonationCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
