// import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/Header/AllCards/AllCards";
import BannerSection from "../../Components/Header/Banner/BannerSection";
import GetComponent from "../../Components/GetComponent/GetComponent";
import { useEffect, useState } from "react";
// import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  // const allCards = useLoaderData();
  const { campaignsData } = GetComponent();

  const [donationCampaign, setDonationCampaign] = useState([campaignsData]);
  console.log(donationCampaign);
  useEffect(() => {
    setDonationCampaign(campaignsData);
  }, [campaignsData]);

  const handleSearch = e => {
    let searchText = e.current.value;
    if (searchText) {
      let filter = campaignsData.filter(
        campaignsData =>
          campaignsData.category.toLowerCase() == searchText.toLowerCase()
      );
      if (filter?.length > 0) {
        setDonationCampaign(filter);
        e.current.value = "";
      } else {
        setDonationCampaign([]);
        e.current.value;
      }
    }
  };

  return (
    <div>
      {/* <Banner></Banner> */}
      <BannerSection handleSearch={handleSearch}></BannerSection>
      <AllCards allCards={donationCampaign}></AllCards>
      {/* <AllCards allCards={allCards}></AllCards> */}
    </div>
  );
};

export default Home;
