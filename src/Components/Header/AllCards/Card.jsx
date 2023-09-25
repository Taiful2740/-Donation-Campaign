const Card = ({ card }) => {
  const {
    cover,
    title,
    category,
    card_bg_color,
    text_and_button_bg_color,
    category_bg_color,
  } = card || {};

  return (
    <div>
      <div
        style={{ backgroundColor: `${card_bg_color}` }}
        className="card card-compact rounded-lg w-[312px] lg:w-auto mx-auto bg-base-100 shadow-xl"
      >
        <figure>
          <img src={cover} alt="Image" />
        </figure>
        <div className="px-4 py-4">
          <button
            style={{
              color: `${text_and_button_bg_color}`,
              backgroundColor: `${category_bg_color}`,
            }}
            className=" text-[14px] font-medium px-3 py-1 rounded-md mb-1"
          >
            {category}
          </button>
          <h2
            style={{ color: `${text_and_button_bg_color}` }}
            className="card-title mt-1"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
