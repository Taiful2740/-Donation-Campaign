import { useEffect, useState } from "react";
import DonationCard from "../../Components/Header/AllCards/DonationCard";
// import CardData from "../../Components/Header/AllCards/CardData";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState("");

  const [isShow, setIsShow] = useState(false);
  // const [onOff, setOnOff] = useState(false);
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
    setNoFound("No Data Found");
  };
  console.log(isShow);

  // const handleBtn = () => {
  //   setOnOff(true);
  //   const btn = document.getElementById("btn-click");
  //   btn.classList.add("hidden");
  // };

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
              onClick={handleRemove}
              className=" bg-[#FF444A] block  text-white w-[110px] h-[48px] font-semibold rounded-lg mx-auto"
            >
              Clear Donations
            </button>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {isShow
              ? donations.map((details, idx) => (
                  <DonationCard key={idx} details={details}></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((details, idx) => (
                    <DonationCard key={idx} details={details}></DonationCard>
                  ))}
          </div>
          {donations?.length > 4 && (
            <div>
              <button
                id="btn-click"
                // onClick={handleBtn}
                onClick={() => setIsShow(!isShow)}
                className=" block text-white w-[110px] h-[48px] font-semibold rounded-lg bg-[#009444] mx-auto"
              >
                {isShow ? "See Less" : "See All"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
