import React from "react";

const CardPage = ({ card, onDeleteFromCard , darkMode }) => {
  const handleDeleteFromCard = (propertyName) => {
    onDeleteFromCard(propertyName);
  };
  return (
    <div className={darkMode? "bg-slate-800" : ""}>
      {card.length != 0 ? (
        <h1 className="text-center mb-10 text-2xl text-red-500 font-semibold ">
          {" "}
          PROPERTIES ADDED TO CARD
        </h1>
      ) : null}
      <ul className="flex  flex-wrap justify-start gap-5 items-center ">
        {card.map((property, index) => (
          <li
            className={` p-10 rounded-2xl flex flex-col gap-6 leading-normal ${darkMode? "bg-black text-white" : "bg-red-50"}`}
            key={index}
          >
            <p className="text-2xl text-red-500"> NAME: {property.name}</p>
            <p className="text-2xl font-semibold text-red-500">
              {" "}
              PRICE: {property.price}
            </p>
            <p className="font-semibold text-2xl text-red-500 ">
              {" "}
              LOCATION: {property.address}
            </p>
            <img height={200} src={property.images} alt="" />
            <button
              onClick={() => handleDeleteFromCard(property.name)}
              className="bg-red-700 text-white font-bold text-2xl rounded-2xl  p-5 "
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardPage;
