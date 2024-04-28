import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,avgRatingString,cuisines,costForTwo,sla} = resData?.info
   
    return (
      <div className='res-card'>
        <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt='res-logo'/>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{avgRatingString} star<span>{sla.deliveryTime}mins</span></h6>
        <h6>{costForTwo}</h6>
      </div>
    )
  }

  export default RestaurantCard