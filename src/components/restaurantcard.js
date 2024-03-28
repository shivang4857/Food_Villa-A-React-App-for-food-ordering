import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="w-[300px] h-[300px]  m-4 p-2 shadow-lg bg-pink-100  rounded-md">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2 className="font-semibold">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };


export default RestaurantCard  ;