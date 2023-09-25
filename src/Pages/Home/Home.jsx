import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/Header/AllCards/AllCards";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const allCards = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <AllCards allCards={allCards}></AllCards>
    </div>
  );
};

export default Home;
