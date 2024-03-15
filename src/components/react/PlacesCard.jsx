
import { placesData } from '../../data/places';
import { useEffect, useState } from "react";
import '../../utils/animation.css'
const PlacesCard = () => {
    
    const [selectedItinerary, setSelectedItinerary] = useState('');

    useEffect(() => {
        const handleItineraryChange = (event) => {
            setSelectedItinerary(event.detail);
        };
        document.addEventListener('itineraryChange', handleItineraryChange);  
    }, []);

    const filteredPlaces = placesData.filter((place) =>
       place.itinerary.includes(selectedItinerary)
    );
   
    return (
    <div className='p-10'>
        <ul className='md:grid flex-col flex  grid-cols-2 gap-10 '>
        {
            filteredPlaces.map(element =>(
                <li key={element.title} className='shadow-md shadow-palete-blue-light w-full rounded-lg flex md:flex-row flex-col '>
                   <div className='md:w-1/2'>
                    <img src="/images/Trinidad.webp" alt="" className='object-cover rounded-lg'/>
                   </div>
                   <div className='md:w-1/2'>
                    <h4 className='text-center py-2 text-xl font-bold text-palete-blue-light'>{element.title}</h4>
                    <p className='px-5'>{element.description}</p>
                    </div>
                </li>
            ))
        }
        </ul>
        <div className='h-[200px]'></div>
    </div>

  )
}

export default PlacesCard