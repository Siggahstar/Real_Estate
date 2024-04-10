import "aos/dist/aos.css";
import AOS from "aos";
import { MdVideocam, MdPhotoCamera, MdLocationOn } from "react-icons/md";

import {
  FaBed,
  FaRulerCombined,
  FaBath,
  FaUser,
  FaShareAlt,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const PropertyCard = ({ property, addToCard }) => {
  const { images, address, name, price, about, bed, bath, area, owner } =
    property;

  return (
    <div
      data-aos="zoom-in"
      className="flex shadow-lg hover:shadow-2xl flex-col border-2 rounded-3xl "
    >
      <div
        className="w-full h-[250px] rounded-3xl flex flex-col  justify-between pb-4 px-5 pt-5"
        style={{ backgroundImage: `url(${images})` }}
      >
        <div className="flex justify-between ">
          <p className="bg-red-500 px-2 text-white hover:bg-white hover:text-black rounded-2xl cursor-pointer">
            Featured
          </p>
          <div className="flex justify-between gap-2">
            <p className="bg-red-500 px-2 text-white hover:bg-white hover:text-black rounded-2xl cursor-pointer">
              Sales
            </p>
            <p className="bg-red-500 px-2 text-white hover:bg-white hover:text-black rounded-2xl cursor-pointer">
              active
            </p>
          </div>
        </div>
        <div className="flex  justify-between ">
          <div className="text-white flex ">
            <MdLocationOn size={25} /> {address}
          </div>
          <div className="text-white flex gap-5">
            <MdVideocam size={25} />
            <MdPhotoCamera size={25} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-4 px-6 z-1000">
        <p className="text-2xl font-semibold">{name}</p>
        <h1 className="font-bold text-red-500 text-2xl ">{price}</h1>
        <p className="max-w-[300px]">{about}</p>
        <div className="flex gap-4 text-lg items-center pb-10">
          <FaBath color="red" /> {bath} <FaBed color="red" /> {bed}{" "}
          <FaRulerCombined color="red" /> {area}
        </div>
        <hr
          style={{
            backgroundColor: "red",
            height: "4px",
          }}
        />
        <div className="flex justify-between pb-5">
          <div className="flex gap-3 items-center text-lg font-semibold">
            <div className="bg-red-500 rounded-full p-1">
              <FaUser color="white" />
            </div>{" "}
            {owner}
          </div>
          <div className="flex text-red-500 gap-4">
            <FaShareAlt />
            <FaHeart />
            <div>
              <button
                className="p-2 rounded-2xl bg-red-200 hover:shadow-2xl hvoer:text-lg hover:text-black"
                onClick={() => addToCard(property)}
              >
                {" "}
                Add To card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
