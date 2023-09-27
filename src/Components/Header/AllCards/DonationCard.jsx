import { Link } from "react-router-dom";

const DonationCard = ({ details }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_and_button_bg_color,
    price,
  } = details;

  return (
    <div>
      <div
        style={{ backgroundColor: `${card_bg_color}` }}
        className="card card-side rounded-lg w-[312px] h-[200px] lg:w-auto mx-auto bg-base-100 shadow-xl"
      >
        <figure>
          <img src={picture} alt="img" />
        </figure>
        <div className=" mt-7 ml-6">
          <button
            style={{
              color: `${text_and_button_bg_color}`,
              backgroundColor: `${category_bg_color}`,
            }}
            className=" text-[14px] font-medium py-1 px-2 rounded-md mb-1"
          >
            {category}
          </button>
          <h2 className="card-title text-sm md:text-[24px] font-semibold mt-1 ">
            {title}
          </h2>
          <p
            style={{ color: `${text_and_button_bg_color}` }}
            className="card-title text-[20px] font-semibold mt-2 mb-3"
          >
            ${price}
          </p>
          <div className="card-actions justify-start">
            <Link to={`/allCards/${id}`}>
              <button
                style={{
                  backgroundColor: `${text_and_button_bg_color}`,
                  color: `${text_and_button_bg_color}`,
                }}
                className="py-2 rounded-md px-4 text-[14px] font-medium"
              >
                <span className="text-white text-xs  md:text-[18px] font-semibold ">
                  View Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
