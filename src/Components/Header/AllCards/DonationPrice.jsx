import { Link } from "react-router-dom";

const DonationPrice = ({ details }) => {
  const {
    id,
    title,
    picture,
    price,
    card_bg_color,
    category_bg_color,
    text_and_button_bg_color,
  } = details || {};
  return (
    <div
      style={{ backgroundColor: `${card_bg_color}` }}
      className="card mx-auto h-[220px] md:w-[620px] card-side bg-base-100 shadow-xl"
    >
      <img
        className="rounded-l-md w-[180px] md:w-[240px] md:h-[220px]"
        src={picture}
        alt=""
      />
      <div className="pt-6 pl-6">
        <button
          style={{
            backgroundColor: `${category_bg_color}`,
            color: `${text_and_button_bg_color}`,
          }}
          className="py-1 rounded-md px-3 text-[14px] font-medium"
        >
          {category}
        </button>

        <h2
          style={{ color: `${text_and_button_bg_color}` }}
          className="card-title mt-2 text-[20px] font-semibold "
        >
          {title}
        </h2>
        <h2
          style={{ color: `${text_and_button_bg_color}` }}
          className="card-title text-[20px] font-semibold mt-2"
        >
          ${price}.00
        </h2>

        <div className="card-actions  justify-start">
          <Link to={`allCards/${id}`}>
            <button
              style={{
                backgroundColor: `${text_and_button_bg_color}`,
                color: `${text_and_button_bg_color}`,
              }}
              className="py-2 mt-7 mb-6 rounded-md px-4 text-[14px] font-medium"
            >
              <span className="text-white">View Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationPrice;
