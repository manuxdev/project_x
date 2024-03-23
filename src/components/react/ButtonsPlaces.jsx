import {places} from '../../data/prov'

const ButtonsPlaces = ({placeName}) => {

  const currentIndex = places.findIndex(place => place.name === placeName);
  const previousPlace = currentIndex > 0 ? places[currentIndex - 1] : null;
  const nextPlace = currentIndex < places.length - 1 ? places[currentIndex + 1] : null;

  return (
    <div className='px-5 flex gap-5'>
       <button className="bg-palete-blue-dark xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-palete-blue-light transition">Book Now</button>
       {
        previousPlace ? (
          <a href={`/${previousPlace.name}`}>
          <button className='border-2 border-white xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-white transition'>{previousPlace.name}</button>
          </a>
        ): null
       }
        {
        nextPlace ? (
          <a href={`/${nextPlace.name}`}>
          <button  className='border-2 border-white xl:px-10 xl:py-3 py-2 px-5  rounded-lg hover:shadow-lg hover:shadow-white transition'>{nextPlace.name}</button>
          </a>
        ): null
       }
    </div>
  )
}

export default ButtonsPlaces