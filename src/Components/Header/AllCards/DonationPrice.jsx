const DonationPrice = ({ details }) => {
  const { id, title, picture, price, description } = details || {};
  return (
    <div>
      <div>
        <div
          style={{ backgroundColor: `${card_bg_color}` }}
          className="card card-side w-[550px] pr-10 bg-base-100 shadow-xl"
        >
          <figure>
            <img className="mr-6" src={picture} alt="img" />
          </figure>
          <div className="">
            <button
              style={{
                color: `${text_and_button_bg_color}`,
                backgroundColor: `${category_bg_color}`,
              }}
              className=" text-[14px] font-medium px-3 py-1 rounded-md mb-2 mt-7"
            >
              {category}
            </button>
            <h2 className="card-title  mb-2">{title}</h2>
            <p style={{ color: `${text_and_button_bg_color}` }}>${price}</p>
            <div className="card-actions justify-start">
              <button
                onClick={handleAddToDonation}
                style={{
                  backgroundColor: `${text_and_button_bg_color}`,
                }}
                className="flex items-start text-white rounded-lg mt-2 py-[10px] px-[9px] "
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPrice;
