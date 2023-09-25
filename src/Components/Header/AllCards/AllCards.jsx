import Card from "./Card";

const AllCards = ({ allCards }) => {
  console.log(allCards);
  return (
    <div className="my-10">
      <h1 className="text-2xl text-center font-semibold">All Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mb-48 lg:grid-cols-4 gap-4 py-10">
        {allCards?.map((card, idx) => (
          <Card key={idx} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
