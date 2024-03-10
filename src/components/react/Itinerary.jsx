import { useEffect, useState } from "react";
import { itineraryData } from "../../data/itinerary"
import ItineraryTag from "./ItineraryTag";


function Itinerary({place}) {
  
  const [itinerary, setItinerary] = useState();
  const matchingItineraries = itineraryData.filter((item) =>
    item.place.includes(place)
  );

  const handleItineraryChanges = (item) => {
    setItinerary(item);
    document.dispatchEvent(new CustomEvent('itineraryChange', { detail:`${item}`}))
  
};

  useEffect(() => {

   
    if (matchingItineraries.length > 0) {
      const firstItinerary = matchingItineraries[0];
      setItinerary(firstItinerary.title);
    }
  
  }, [setItinerary]);
  
 
  return (
    <div className="flex z-20 justify-center items-center w-full">
      {
        matchingItineraries.map(item => (
          <div key={item.title} className="flex items-center ">

                <ItineraryTag
                  title={item.title}
                  isSelected={itinerary === `${item.title}`}
                  // onClick={handleItinerary}
                  onClick={() => handleItineraryChanges(item.title)}
                  itinerary = {item.title}
                />
      </div>
        ))
      }
   
</div>
  )
}

export default Itinerary