import { useState } from "react"
import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState(resList)
    return(
      <div className='body'>
        <div className='features-container'>
          <div>
            <input type='text'/>
            <button>Search</button>
          </div>
          <div id="filter">
            <button className="filter-btn" onClick={()=>{
              const filteredList = listOfRestaurant.filter(res => res?.info?.avgRating > 4.5)
              setListOfRestaurant(filteredList)
            }}>Top Restaurant</button>
          </div>
        </div>
        <div className='res-container'>
           {listOfRestaurant.map(restaurant=> <RestaurantCard resData={restaurant}/>)}
        </div>
      </div>
    )
  }

  export default Body