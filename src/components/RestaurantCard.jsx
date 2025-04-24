import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
      } = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className="rounded-xl"
            alt="res-logo"
            src={CDN_URL+
            cloudinaryImageId}
            />
            <h4 className="font-bold py-4 text-lg">{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;