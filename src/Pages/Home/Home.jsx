import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/Header/AllCards/AllCards";
import BannerSection from "../../Components/Header/Banner/BannerSection";
// import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const allCards = useLoaderData();

  return (
    <div>
      {/* <Banner></Banner> */}
      <BannerSection></BannerSection>
      <AllCards allCards={allCards}></AllCards>
    </div>
  );
};

export default Home;
