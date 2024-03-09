'use client'
import { useEffect, useState } from "react";
import { itineraryData } from "../../data/itinerary"
import ItineraryTag from "./ItineraryTag";


function Itinerary({place, onItineraryChange }) {
  const [itinerary, setItinerary] = useState();
  const matchingItineraries = itineraryData.filter((item) =>
    item.place.includes(place)
  );
 useEffect(() => {
    const handleItineraryChange = (event) => {
      
      
        setItinerary(event.detail);
        onItineraryChange(event.detail);
      
    };

    window.addEventListener('itineraryChange' , handleItineraryChange);

    return () => {
      window.removeEventListener('itineraryChange', handleItineraryChange);
    };
 }, [onItineraryChange]);

  useEffect(() => {
    if (matchingItineraries.length > 0) {
      const firstItinerary = matchingItineraries[0];
      setItinerary(firstItinerary.title);
    }
  }, [setItinerary]);
  
  const handleItinerary = (newItinerary) => {
  
  };
  return (
    <div className="flex z-20 justify-center items-center w-full">
      {
        matchingItineraries.map(item => (
          <div key={item.title} className="flex items-center ">

                <ItineraryTag
                  title={item.title}
                  isSelected={itinerary === `${item.title}`}
                  // onClick={handleItinerary}
                  onClick={() => window.dispatchEvent(new CustomEvent('itineraryChange', { detail:`${item.title}`}))}
                  itinerary = {item.title}
                />
      </div>
        ))
      }
   
</div>
  )
}

export default Itinerary