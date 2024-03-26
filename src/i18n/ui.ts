export const languages = {
    en: 'en',
    es: 'es',
    rs:'rs'
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en:{ 
      nav: { 
        'home':'Home',
        'places': 'Places',
          'about': 'About',
          'services': 'Services',
          'feedback': 'FeedBack',
          matanzas: 'Matanzas',
          habana:"Havana",
          pinar:"Pinar del Río",
          central: "Central Region"
         },
      hero: 
          {'h1':'EASY WAY TO',
            'h12':'THE CITY',
            'span':'EXPLORE',
            'p':'Experience the reliability, efficiency and quality that only our taxi service can offer. Driven by highly qualified professionals, we guarantee a safe, punctual and comfortable trip.',
            'button':'Book Now',
          },
        prov:{
          visit:'Visit',
          'h2':'We Will Help You Travel And You Can Consult With Us.',
          'p':'Discover New horizons with us. Travel, explore and live the city.',
          places: [
            {
              name:"Pinar del Río",
              slug:'Pinar del Río',
              desc:"Tobacco, mogotes, beaches. Exuberant nature, World Heritage Site, Caribbean authenticity, fascinating culture.",
              img:'/images/pinar_rio.webp',
              href:"/"
          },
         
          {
              name:"Havana",
              slug:'La Habana',
              desc:"Capital of Cuba, colonial history, iconic architecture, vibrant culture, music and captivating beaches.",
              img:'/images/cristo_vista_havana.webp',
              href:"/"
          },
          {
              name:"Matanzas",
              slug:"Matanzas",
              desc:"Spectacular beaches, warm weather, varied tourist activities and great hospitality.",
              img:'/images/varadero.webp',
              href:"/"
          },
          {
              name:"Central Region",
              slug:"Región Central",
              desc:"Colonial architecture, traditional music, beautiful beaches and natural parks.",
              img:'/images/Trinidad.webp',
              href:"/"
          },
         ]
        },
        
        aboutComp: {

            'h2':"About Company",
            'pdesc':"We stand out for providing unprecedented tourist experiences, offering personalized tours in classic cars that capture the vintage essence of the island. With competitive rates, we are committed to providing quality service that reflects Cuban authenticity and hospitality.",
            'p':"Discover the island with us and make your visit to Cuba an unforgettable experience.",
            'secT':"Security",
            'secP':"We create the conditions so that your trip is completely safe.",
            'conT':"Comfort",
            'conP':"Travel with the greatest comfort and the best attention.",
        },

        about2:{
            h2:'Live The Best Experience With Our Work Team.',
             elementos:{
              el1: {
                num: '1',
                title: 'Travel To Your Place',
                text: 'Start the booking by sending a message via WhatsApp with your details and preferences.',
                active: false
                },
                el2: {
                num: '2',
                title: 'Find Your Travel Best Place',
                text: 'Collaborate with our team to personalize your trip according to your needs.',
                active: false
                },
                el3: {
                num: '3',
                title: 'Enjoy The Journey With Pleasure',
                text: 'Experience your journey with our best drivers and guides.',
                active: true
                }
                    }
        },
        services: {
                    h2: "With us you will find the best service on the island.",
                    p:"We have a team of highly qualified professionals.",
                    serv1h4: 'Different Destinations',
                    serv1p: 'Explore a variety of unique destinations, from stunning mountains to vibrant beaches and cities.',
                    serv2h4: 'Competitive prices',
                    serv2p: 'We offer competitive prices to ensure your trip is affordable and memorable.',
                    serv3h4: 'Easy Reservation',
                    serv3p: 'We make booking your trip a simple and fast process.',
      
        },
        feedback: {
            h2: 'What clients say about our tours',
            p:'Find out what our customers have to say about our tours, as they share their unforgettable experiences and rave reviews.',
        },
        itinerary:[
          {
            title: "One day tour in Havana",
            place: ["Havana", "La Habana"],
            details: [
              "Departure time from the hotel ~8:00 Arrival time at the hotel ~17:00-18:00",
              "It takes 1.5 to 2 hours to reach Havana. On the way, we will make a stop at the highest bridge in Cuba (Bacunayagua), with views of the Valley of Yumurí and the ocean. They can try the most delicious pineapple cocktail in Cuba (for an additional cost).",
              "Stop near the Morro Castle, which offers impressive panoramic views of Havana. (Entry is paid and optional).",
              "Then, we will take a walk along the Malecón from where a two-hour walk through Old Havana will begin. Among the attractions are the Plaza de San Francisco de Asís, a bell tower from the old Franciscan monastery (with a fee), a rum museum with tasting (paid entry), the Cathedral of Our Lady of Kazán, the Plaza of the Cathedral, the Little Wine Cellar, the Palace of Spanish Governors, the Plaza of Arms, the Castle of the Royal Force (paid entry), the Bishop Street, the Hotel Ambos Mundos, the Plaza Vieja, among others.",
              "Visit to the Plaza of the Revolution, a stroll through the center of Havana, where you will find the Capitol, the Havana Grand Theater, the café Floridita (mentioned by Hemingway) and other points of interest.",
              "We leave Havana at 3:00 pm.",
              "The lunch is not included in the price of the excursion (estimated lunch cost is 15-20 $€).",
            ],
          },
          {
            title: "Sunset Tour in Havana",
            place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:00 AM in Varadero.",
              "About two hours of travel to La Habana by the north coast.",
              "Stop at the highest bridge in Cuba (Bacunayagua), 112 meters high where you can enjoy the best Pineapple Cocktail in Cuba.",
              "Drive to La Habana.",
              "Stroll through Old Havana, declared a World Heritage Site by UNESCO in 1982.",
              "Visit the Plaza de la Catedral.",
              "Visit the Plaza del Brazo.",
              "Visit the Plaza Vieja.",
              "Visit the Plaza San Francisco de Asís.",
              "Stop at the oldest fort in Cuba, the Morro Castle.",
              "Visit the statue of Christ of Havana.",
              "Hotel Nacional.",
              "Visit the famous Hemingway bar La Bodeguita del Medio and El Floridita.",
              "Lunchtime (prices vary depending on customer choice, not included).",
              "Route by the Malecón and New Havana.",
              "Stop at the Plaza de la Revolución.",
              "Time walking in the city center where you can see the Capitol building, the Havana Grand Theater, and Central Park.",
              "Optional stop at the Rum Museum.",
              "Visit the tobacco shop.",
              "In the evening, we will visit the best places to enjoy sunset, which can be from the Havana Malecón or the Morro Castle.",
              "The route ends at sunset.",
              "Return to Varadero after sunset.",
              "Optional things you can add to this tour: 25USD/EURO for an hour in a classic convertible once in Havana.",
            ],
          },
          {
            title: "Havana Tour + Cannon Shot",
           place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:00 am.",
              "Walk through Old Havana, declared a World Heritage Site by UNESCO in 1982. Enjoy free time, and we recommend a visit to the representative arts and crafts market representing the cultural identity of the people.",
              "Visit the Plaza de San Francisco de Asís, full of cobblestones located at the gates of La Habana.",
              "Stop at the Plaza de la Catedral, one of the most beautiful places in Old Havana.",
              "Scale at the recently restored Plaza Vieja, a mandatory stop for history lovers.",
              "Visit the Plaza de Armas, the oldest square in La Habana.",
              "Stop at the Palace of the Captains General, one of the most important architectural works in Cuba.",
              "Short stay at the Hotel Ambos Mundos, an eclectic style building located in Old Havana.",
              "Visit two of the most popular bars in La Habana, La Bodeguita del Medio and El Floridita, to enjoy the most delicious cocktails.",
              "Lunch suggested by the guide in the most spectacular restaurants of La Habana where you can enjoy our typical Cuban food.",
              "Travel in a classic car along the Avenue Malecón enjoying a beautiful view of the Bay of La Habana.",
              "Walk through Modern Havana exclusive visit.",
              "Panoramic journey through the Vedado and Miramar neighborhoods.",
              "Stop at the Plaza de la Revolución, one of the largest in the world and home to one of the most interesting museums in all of Cuba.",
              "Panoramic scale at the corresponding building of the Capitol, one of the most emblematic places in Havana.",
              "Stop at José Martí Central Park, a great attraction for travelers from all over the world, where the history of magnificent buildings and nature combine.",
              "Visit the Great Theatre of La Habana Alicia Alonso, a magnificent building headquarters of the Ballet and the National Opera of Cuba.",
              "Panoramic visit to the Fortress of the Morro, an important fortification built in Cuba in the 16th century.",
              "Panoramic visit to the Christ of La Habana, a monumental sculptural work of about 20 meters in height.",
              "Dinner at the recommended restaurants of La Habana according to your choice. Choose between shrimp or chicken, to savor authentic Cuban cuisine.",
              "At 21:00 hours you can enjoy one of the Cuban traditions: the 'cannon shot of nine' in the guided visit to the Fortress of San Carlos de la Cabaña.",
              "Journey back to your accommodation in a classic car with maximum comfort and safety.",
            ],
          },
          {
            title: "Havana Tour + Tropicana",
            place: ["Havana", "La Habana"],
            details: [
              "Pickup at your accommodation or hotel at 10:30 am.",
              "About two hours of travel to La Habana by the Atlantic coast.",
              "Stop at the highest bridge in Cuba «Bacunayagua» where you can also enjoy the best Pineapple Cocktail in Cuba.",
              "Drive to La Habana.",
              "Stroll through Old Havana, declared a World Heritage Site by UNESCO in 1982.",
              "Visit the Plaza de la Catedral.",
              "Visit the Plaza de Arma.",
              "Visit the Plaza Vieja.",
              "Visit the Plaza San Francisco de Asís.",
              "Stop at the oldest fort in Cuba, the Morro Castle.",
              "Visit the statue of Christ of La Habana.",
              "Visit the famous Hemingway bar La Bodeguita del Medio and El Floridita.",
              "Lunchtime (prices vary depending on customer choice, not included).",
              "The route by the Malecón and New Havana.",
              "Stop at the Plaza de la Revolución.",
              "Time walking towards the center where you can see the Capitol building, the Havana Grand Theater, and Central Park.",
              "Optional stop at the Rum Museum.",
              "Visit the tobacco shop.",
              "Visit to the Tropicana (the guest pays the cover there itself in the cabaret).",
              "After the show, return trip to Varadero.",
            ],
          },
          {
            title: "Zapata Swamp Tour",
            place: "Matanzas",
            details: [
              "Departure from the hotel at 8 am.",
              "We cross the island from north to south. The trip lasts about 2 hours.",
              "On the way, we will pass through the cities of Santa Marta and Cardenas, the town of Jovellanos, where many descendants of African slaves live, a cooperative called Vladimir Ilich Lenin, the village of Australia, sugar cane, banana, citrus, mango and other tropical crops plantations.",
              "First stop at a mini farm with typical Cuban plants and animals. For an additional cost, you can drink sugarcane juice and ride a bull cebú.",
              "Crocodile breeding facility (5 € per person).",
              "Visit to 'Indians': We board motorboats and they take us to an island with some huts and Indian sculptures. This Indian village has a cost of 12 € per person and lasts about 2 hours or more.",
              "Lunch included with 4 types of meat, such as crocodile, crab, lobster, prawns, fish, deer, snails or squids, for 15-20 € per person. Also includes rice with vegetables, salad and drinks.",
              "Caribbean Sea: We will enjoy the Caribbean Sea in the Bay of Pigs, with clear waters especially near the corals.",
              "Snorkeling: Rental of snorkeling equipment by 5 € per hour. You can bring your own equipment. It is recommended to bring breadcrumbs from the hotel to feed the fish and other marine creatures.",
              "Diving: It will cost 25 € for 40 minutes for experienced divers. Beginners pay an additional 10 € for an introductory lesson. The diving area is easy and has sunken ships at 25-30 meters deep.",
              "Cenotes: We will see cenotes or sinkholes in the jungles around the Bay of Pigs, where you can swim. If desired, we can go to the House of the Hummingbird to observe birds ($1).",
              "Optional stop to swim in the sand beach in the village of Playa Larga.",
              "History: We will visit important historical sites related to the Cold War in the Bay of Pigs, where in 1961 a pro-Castro invasion was carried out.",
              "Return to Varadero at 16.00.",
            ],
          },
          {
            title: "Matanzas Tour",
            place: "Matanzas",
            details: [
              "Departure from the hotel at 9:00 am.",
              "Visit to the Bellamar Caves (entry $5): We will explore the impressive Bellamar Caves, a cave system offering unique and spectacular rock formations. We will discover the rich geology and the history of this fascinating place.",
              "Tour of the colonial city center: We will immerse ourselves in the history of Matanzas by exploring its colonial center. We will visit the famous French Pharmacy, an iconic architectural landmark reflecting French influence in the region.",
              "Monserrat Lookout: We will enjoy a panoramic view from the Monserrat Lookout, offering an impressive perspective of the city and its surroundings. A perfect place to capture unforgettable memories.",
              "The Hermitage: We will visit The Hermitage, a sacred place that has been a witness to significant historical events. We will learn more about the cultural and religious significance of this site.",
              "San Severino Castle: We will explore San Severino Castle, a historic fortress that played a crucial role in defending the city. We will discover military architecture and the history surrounding this imposing castle.",
              "Saturn Cave (entry $5): We will conclude our tour by exploring the Saturn Cave, a subterranean cenote with crystal clear waters. Visitors will have the opportunity to swim and enjoy the unique natural beauty of this geological formation.",
              "Return to the hotel around 2:00 pm.",
            ],
          },
          {
            title: "One-day excursion to Varadero from Havana",
            place: "Matanzas",
            details: [
              "Pickup at the hotel or B&B in a classic car at 8:00 am.",
              "Exit towards Varadero along the coast with beautiful landscapes.",
              "Optional stop at Bacunayagua Bridge: We will make a stop at the highest bridge in Cuba with 112 m of height. From this lookout, visitors can enjoy beautiful panoramic views and taste the best Pineapple Cocktail in Cuba.",
              "Journey to Coral Beach to do snorkeling (entries not included, 10 USD per person): We will explore the crystal clear waters of Coral Beach, ideal for practicing snorkeling and enjoying marine life.",
              "Visit to the open cave of Saturn (entries not included, 5 USD per person): We will discover the beauty of the Saturn Cave, a subterranean cenote with crystal clear waters. Visitors will have the opportunity to swim and enjoy the unique natural beauty of this geological formation.",
              "Continuation of the journey to Varadero.",
              "Visit La casa Alcapone in Varadero: We will explore La Casa Alcapone, which offers a glimpse of the history and luxury of the era.",
              "Visit the Varadero market: Immerse yourself in local culture by exploring the Varadero market, where you can find local handicrafts and products.",
              "Visit the Josone Park: Enjoy the natural beauty of the Josone Park, an oasis in the middle of Varadero with exuberant gardens and serene lakes.",
              "Visit the Dupon Mansion: We will explore the elegant Dupon Mansion, a testament to the historical architecture of Varadero.",
              "Free time at the beach: Visitors will have time to relax on the beautiful beaches of Varadero.",
              "The tour concludes around 4:30 pm and returns to La Habana.",
            ],
          },
            {
            title: "Trinidad - Cienfuegos Tour (Optional Nicho)",
            place: ["Central Region", "Región Central"],
            details: [
            "Pickup at your accommodation or hotel at 06:30 am.",
            "Three-hour journey through the countryside to Cienfuegos.",
            "Excursion in the city of Cienfuegos.",
            "Visit to Punta Gorda area, the Palacio del Valle, and the Jagua Hotel.",
            "Optional Stop at El Nicho Waterfall (This has an extra cost of 40 euros to pay for transportation to climb the mountain).",
            "Note: If we visit El Nicho, we will have less time to spend in the other areas.",
            "Travel to Trinidad to enjoy the view of the Caribbean Sea.",
            "Break time for lunch in Trinidad (not included).",
            "Walk through the historic center such as Plaza Mayor, La Canchanchara, museums, etc.",
            "Free time for more walks or visit to the craft market if time permits.",
            "Return to your hotel around 7 pm.",
            "This tour includes a classic car with air conditioning and a tour guide.",
            ],
            },
            {
            title: "Three Cities Tour Trinidad - Cienfuegos - Santa Clara",
             place: ["Central Region", "Región Central"],
            details: [
            "The trip can also be done in two days.",
            "Pickup at your accommodation or hotel at 06:00 am.",
            "Three-hour journey through the countryside to Santa Clara.",
            "Stop at the mausoleum of Ernesto Che Guevara and the Revolution Square.",
            "Stop at Parque Vidal and city tour.",
            "Stop at The train.",
            "Optional Stop at El Nicho Waterfall (This has an extra cost of 40 euros to pay for transportation to climb the mountain).",
            "Note: If we visit El Nicho, we will have less time to spend in the other areas. Not available on one-day tour.",
            "Travel to Trinidad to enjoy the view of the Caribbean Sea.",
            "Break time for lunch in Trinidad (not included).",
            "Walk through the historic center such as Plaza Mayor, La Canchanchara, museums, etc.",
            "Free time for more walks or visit to the craft market if time permits.",
            "Departure to Cienfuegos.",
            "Excursion in the city of Cienfuegos.",
            "Visit to Punta Gorda area, the Palacio del Valle, and the Jagua Hotel.",
            "Return to your hotel around 9 pm.",
            ],
            },
            {
            title: "Viñales - Soroa Tour",
            place: "Pinar del Río",
            details: [
            "Pickup at the hotel or accommodation at 8:30 am.",
            "Cross the province of Havana to continue to Soroa.",
            "Visit Soroa where you can enjoy a swim in the waterfall and visit the orchid garden (you must pay admission at both places, 3-5 USD per person).",
            "Note: If you come from Varadero and spend too much time in Soroa, you will not have enough time to enjoy Viñales.",
            "Continuation of the tour to the Viñales Valley.",
            "Stop at the 'Las Jazmines' viewpoint (an excellent place for photography).",
            "Visit the farmer's house to see and learn about Cuban tobacco.",
            "Visit the town of Viñales.",
            "Visit to the Indian Cave (entrance not included, 5 USD per person).",
            "Visit the Mural of Prehistory.",
            "Enjoy a horseback ride (optional, not included, 10-15 USD per person).",
            "Return trip to Havana or Varadero.",
            ],
            },
          {
            title: "City Tour Varadero for Hour",
            place: ["Matanzas"],
            details: [
              "Explore every corner of the city of Varadero in a classic convertible car for time. The price is $40 USD/hour.",
              "House of All",
              "Craft fair",
              "Photographic viewpoint",
              "Josones Park",
              "Varadero Boulevard",
              "Xanadu Mansion",
              "Dolphinarium",
              "Marina Varadero",
            ],
          },
        ]      
      },


        es: {
        nav:{ 
          'home':'Inicio',
          'places': 'Destinos',
          'about': 'Sobre Nosotros',
          'services': 'Servicios',
          'feedback': 'Comentarios',
          matanzas: 'Matanzas',
          habana:"La Habana",
          pinar:"Pinar del Río",
          central: "Región Central"
        },   
        hero:{
            'h1':'CAMINO FÁCIL A',
            'h12':'LA CIUDAD',
            'span':'EXPLORAR',
            'p':"Experimenta la confiabilidad, eficiencia y calidad que solo nuestro servicio de taxis puede ofrecer. Conducidos por profesionales altamente calificados, garantizamos un viaje seguro, puntual y cómodo."
            ,'button':'Reserva Ahora',
        },
        prov:{
          visit:'Visita',
            'h2':'Le ayudaremos a viajar y puede consultar con nosotros.',
            'p':'Descubre Nuevos horizontes con nosotros. Viaja, explora y vive la ciudad.',
            places: [
             
                    {
                     name: "Pinar del Río",
                     slug: 'Pinar del Río',
                     desc: "Tabaco, mogotes, playas. Naturaleza exuberante, Sitio de Patrimonio Mundial, autenticidad caribeña, cultura fascinante.",
                     img: '/images/pinar_rio.webp',
                     href: "/"
                     },
                     {
                     name: "La Habana",
                     slug: 'La Habana',
                     desc: "Capital de Cuba, historia colonial, arquitectura icónica, cultura vibrante, música y playas cautivadoras.",
                     img: '/images/cristo_vista_havana.webp',
                     href: "/"
                     },
                     {
                     name: "Matanzas",
                     slug: "Matanzas",
                     desc: "Playas espectaculares, clima cálido, diversas actividades turísticas y gran hospitalidad.",
                     img: '/images/varadero.webp',
                     href: "/"
                     },
                     {
                     name: "Región Central",
                     slug: "Región Central",
                     desc: "Arquitectura colonial, música tradicional, hermosas playas y parques naturales.",
                     img: '/images/Trinidad.webp',
                     href: "/"
                     }
           ]
        },
        aboutComp:{
              'h2':"Acerca de la compañía",
              'pdesc':"Nos destacamos por proporcionar experiencias turísticas sin precedentes, ofreciendo tours personalizados en autos clásicos que capturan la esencia vintage de la isla. Con tarifas competitivas, estamos comprometidos con la prestación de un servicio de calidad que refleja la autenticidad cubana y la hospitalidad.",
              'p':"Descubre la isla con nosotros y haz que tu visita a Cuba sea una experiencia inolvidable.",
              'secT':"Seguridad",
              'secP':"Creamos las condiciones para que su viaje sea totalmente seguro.",
              'conT':"Comfort",
              'conP':"Viaje con la mayor comodidad y las mejores atenciones.", 
        },
        about2:{
              h2:'Vive La Mejor Experiencia Con Nuestro Equipo de Trabajo.',
              elementos:{
                el1: {
                  num: '1',
                  title: 'Viaja a Tu Lugar',
                  text: 'Inicia la reserva enviando un mensaje a través de WhatsApp con tus detalles y preferencias.',
                  activo: false
                  },
                  el2: {
                  num: '2',
                  title: 'Encuentre Su Mejor Opción de Viaje',
                  text: 'Colabora con nuestro equipo para personalizar tu viaje según tus necesidades.',
                  activo: false
                  },
                  el3: {
                  num: '3',
                  title: 'Disfruta del Viaje con Placer',
                  text: 'Vive tu viaje con nuestros mejores conductores y guías.',
                  activo: true
                  }
                     }
        },
        services: {
                  h2: "Con nosotros encontrarás el mejor servicio en la isla.",
                  p: "Contamos con un equipo de profesionales altamente calificados.",
                  serv1h4: 'Destinos Diferentes',
                  serv1p: 'Explora una variedad de destinos únicos, desde impresionantes montañas hasta playas y ciudades vibrantes.',
                  serv2h4: 'Precios Competitivos',
                  serv2p: 'Ofrecemos precios competitivos para asegurar que tu viaje sea asequible y memorable.',
                  serv3h4: 'Reservación Fácil',
                  serv3p: 'Hacemos que reservar tu viaje sea un proceso simple y rápido.',
        },
        feedback: {
              h2: 'Lo que dicen los clientes sobre nuestros tours',
              p:'Descubra lo que nuestros clientes tienen que decir sobre nuestros tours, mientras comparten sus experiencias inolvidables y críticas favorables.',
        },

        itinerary:[
          
{
  title: "Tour de un día en La Habana",
  place: ["Havana", "La Habana"],
  details: [
  "Hora de salida desde el hotel ~8:00. Hora de llegada al hotel ~17:00-18:00",
  "El trayecto hasta La Habana dura de 1,5 a 2 horas. En el camino, haremos una parada en el puente más alto de Cuba (Bacunayagua), con vistas al Valle de Yumurí y al océano. Podrán probar el cóctel de piña más delicioso de Cuba (por un costo adicional).",
  "Parada cerca del Castillo del Morro, que ofrece impresionantes vistas panorámicas de La Habana. (La entrada es pagada y opcional).",
  "Luego, daremos un paseo por el Malecón desde donde comenzará una caminata de dos horas por la Habana Vieja. Entre las atracciones se encuentran la Plaza de San Francisco de Asís, una torre de campanario del antiguo monasterio franciscano (con una tarifa), un museo del ron con degustación (entrada pagada), la Catedral de Nuestra Señora de Kazán, la Plaza de la Catedral, la Bodeguita del Medio, el Palacio de los Gobernadores Españoles, la Plaza de Armas, el Castillo de la Real Fuerza (entrada pagada), la Calle Obispo, el Hotel Ambos Mundos, la Plaza Vieja, entre otros.",
  "Visita a la Plaza de la Revolución, un paseo por el centro de La Habana, donde encontrarás el Capitolio, el Gran Teatro de La Habana, el café Floridita (mencionado por Hemingway) y otros puntos de interés.",
  "Salimos de La Habana a las 3:00 pm.",
  "El almuerzo no está incluido en el precio de la excursión (el costo estimado del almuerzo es de 15-20 $€).",
  ],
  },
  {
  title: "Tour del Atardecer en La Habana",
  place: ["Havana", "La Habana"],
  details: [
  "Recogida en su alojamiento u hotel a las 10:00 AM en Varadero.",
  "Aproximadamente dos horas de viaje a La Habana por la costa norte.",
  "Parada en el puente más alto de Cuba (Bacunayagua), de 112 metros de altura, donde podrás disfrutar del mejor cóctel de piña de Cuba.",
  "Traslado a La Habana.",
  "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982.",
  "Visita a la Plaza de la Catedral.",
  "Visita a la Plaza del Brazo.",
  "Visita a la Plaza Vieja.",
  "Visita a la Plaza San Francisco de Asís.",
  "Parada en el castillo más antiguo de Cuba, el Castillo del Morro.",
  "Visita a la estatua del Cristo de La Habana.",
  "Hotel Nacional.",
  "Visita a los famosos bares de Hemingway La Bodeguita del Medio y El Floridita.",
  "Hora del almuerzo (los precios varían según la elección del cliente, no incluido).",
  "Ruta por el Malecón y La Habana Nueva.",
  "Parada en la Plaza de la Revolución.",
  "Tiempo para caminar por el centro de la ciudad donde podrás ver el Capitolio, el Gran Teatro de La Habana y el Parque Central.",
  "Parada opcional en el Museo del Ron.",
  "Visita a la tienda de tabaco.",
  "Por la noche, visitaremos los mejores lugares para disfrutar del atardecer, que pueden ser desde el Malecón de La Habana o el Castillo del Morro.",
  "La ruta termina al atardecer.",
  "Regreso a Varadero después del atardecer.",
  "Cosas opcionales que puedes agregar a este tour: 25 USD/EURO por una hora en un descapotable clásico una vez en La Habana.",
  ],
  },
  {
    "title": "Tour por La Habana + Cañonazo",
    place: ["Havana", "La Habana"],
    "details": [
      "Recogida en su alojamiento u hotel a las 10:00 am.",
      "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982. Disfrute de tiempo libre, y recomendamos una visita al mercado de artesanías representativas de la identidad cultural del pueblo.",
      "Visita a la Plaza de San Francisco de Asís, llena de adoquines ubicada en las puertas de La Habana.",
      "Parada en la Plaza de la Catedral, uno de los lugares más hermosos de La Habana Vieja.",
      "Escala en la Plaza Vieja, recientemente restaurada, una parada obligatoria para los amantes de la historia.",
      "Visita a la Plaza de Armas, la plaza más antigua de La Habana.",
      "Parada en el Palacio de los Capitanes Generales, una de las obras arquitectónicas más importantes de Cuba.",
      "Breve estadía en el Hotel Ambos Mundos, un edificio de estilo ecléctico ubicado en La Habana Vieja.",
      "Visita a dos de los bares más populares de La Habana, La Bodeguita del Medio y El Floridita, para disfrutar de los cócteles más deliciosos.",
      "Almuerzo sugerido por el guía en los restaurantes más espectaculares de La Habana, donde podrá disfrutar de nuestra típica comida cubana.",
      "Viaje en un auto clásico por la Avenida Malecón, disfrutando de una hermosa vista de la Bahía de La Habana.",
      "Paseo por la Habana Moderna, visita exclusiva.",
      "Recorrido panorámico por los barrios de Vedado y Miramar.",
      "Parada en la Plaza de la Revolución, una de las más grandes del mundo y sede de uno de los museos más interesantes de toda Cuba.",
      "Escala panorámica en el edificio correspondiente al Capitolio, uno de los lugares más emblemáticos de La Habana.",
      "Parada en el Parque Central José Martí, una gran atracción para viajeros de todo el mundo, donde la historia de magníficos edificios y la naturaleza se combinan.",
      "Visita al Gran Teatro de La Habana Alicia Alonso, un magnífico edificio sede del Ballet y la Ópera Nacional de Cuba.",
      "Visita panorámica a la Fortaleza del Morro, una importante fortificación construida en Cuba en el siglo XVI.",
      "Visita panorámica al Cristo de La Habana, una obra escultórica monumental de unos 20 metros de altura.",
      "Cena en los restaurantes recomendados de La Habana según su elección. Elija entre camarones o pollo, para saborear la auténtica cocina cubana.",
      "A las 21:00 horas puede disfrutar de una de las tradiciones cubanas: el 'disparo del cañón de las nueve' en la visita guiada a la Fortaleza de San Carlos de la Cabaña.",
      "Viaje de regreso a su alojamiento en un auto clásico con máximo confort y seguridad."
    ]
  },
  {
    "title": "Tour por La Habana + Tropicana",
    place: ["Havana", "La Habana"],
    "details": [
      "Recogida en su alojamiento u hotel a las 10:30 am.",
      "Aproximadamente dos horas de viaje a La Habana por la costa atlántica.",
      "Parada en el puente más alto de Cuba, el «Bacunayagua», donde también puedes disfrutar del mejor Cóctel de Piña de Cuba.",
      "Traslado a La Habana.",
      "Paseo por La Habana Vieja, declarada Patrimonio de la Humanidad por la UNESCO en 1982.",
      "Visita a la Plaza de la Catedral.",
      "Visita a la Plaza de Arma.",
      "Visita a la Plaza Vieja.",
      "Visita a la Plaza San Francisco de Asís.",
      "Parada en el castillo más antiguo de Cuba, el Castillo del Morro.",
      "Visita a la estatua del Cristo de La Habana.",
      "Visita a los famosos bares de Hemingway La Bodeguita del Medio y El Floridita.",
      "Hora del almuerzo (los precios varían según la elección del cliente, no incluido).",
      "Ruta por el Malecón y la Nueva Habana.",
      "Parada en la Plaza de la Revolución.",
      "Tiempo para caminar hacia el centro donde puedes ver el edificio del Capitolio, el Gran Teatro de La Habana y el Parque Central.",
      "Parada opcional en el Museo del Ron.",
      "Visita a la tienda de tabaco.",
      "Visita al Tropicana (el cliente paga la entrada directamente en el cabaret).",
      "Después del espectáculo, viaje de regreso a Varadero."
    ]
  },
  {
    "title": "Excursión a Ciénaga de Zapata",
    place: ["Matanzas"],
    "details": [
      "Salida del hotel a las 8:00 am.",
      "Cruzamos la isla de norte a sur. El viaje dura aproximadamente 2 horas.",
      "En el camino, pasaremos por las ciudades de Santa Marta y Cárdenas, el pueblo de Jovellanos, donde viven muchos descendientes de esclavos africanos, una cooperativa llamada Vladimir Ilich Lenin, el pueblo de Australia, plantaciones de caña de azúcar, plátano, cítricos, mango y otros cultivos tropicales.",
      "Primera parada en una mini finca con plantas y animales típicos cubanos. Por un costo adicional, puede beber jugo de caña de azúcar y montar un toro cebú.",
      "Instalación de cría de cocodrilos (5 € por persona).",
      "Visita a 'Los Indios': Nos embarcamos en lanchas motoras y nos llevan a una isla con algunas chozas y esculturas indias. Este pueblo indio tiene un costo de 12 € por persona y dura aproximadamente 2 horas o más.",
      "Almuerzo incluido con 4 tipos de carne, como cocodrilo, cangrejo, langosta, camarones, pescado, venado, caracoles o calamares, por 15-20 € por persona. También incluye arroz con verduras, ensalada y bebidas.",
      "Mar Caribe: Disfrutaremos del Mar Caribe en la Bahía de Cochinos, con aguas claras especialmente cerca de los corales.",
      "Snorkeling: Alquiler de equipo de snorkel por 5 € por hora. Puede traer su propio equipo. Se recomienda llevar migas de pan del hotel para alimentar a los peces y otras criaturas marinas.",
      "Buceo: Costará 25 € por 40 minutos para buceadores experimentados. Los principiantes pagan 10 € adicionales por una lección introductoria. El área de buceo es fácil y tiene barcos hundidos a 25-30 metros de profundidad.",
      "Cenotes: Veremos cenotes o sumideros en las selvas alrededor de la Bahía de Cochinos, donde se puede nadar. Si se desea, podemos ir a la Casa del Colibrí para observar aves (1 $).",
      "Parada opcional para nadar en la playa de arena en el pueblo de Playa Larga.",
      "Historia: Visitaremos sitios históricos importantes relacionados con la Guerra Fría en la Bahía de Cochinos, donde en 1961 se llevó a cabo una invasión pro-Castro.",
      "Regreso a Varadero a las 16:00.",
    ]
  },
  {
    "title": "Tour por Matanzas",
    "place": "Matanzas",
    "details": [
      "Salida del hotel a las 9:00 am.",
      "Visita a las Cuevas de Bellamar (entrada $5): Exploraremos las impresionantes Cuevas de Bellamar, un sistema de cuevas que ofrece formaciones rocosas únicas y espectaculares. Descubriremos la rica geología y la historia de este lugar fascinante.",
      "Recorrido por el centro colonial de la ciudad: Nos sumergiremos en la historia de Matanzas explorando su centro colonial. Visitaremos la famosa Farmacia Francesa, un hito arquitectónico icónico que refleja la influencia francesa en la región.",
      "Mirador de Monserrat: Disfrutaremos de una vista panorámica desde el Mirador de Monserrat, que ofrece una perspectiva impresionante de la ciudad y sus alrededores. Un lugar perfecto para capturar recuerdos inolvidables.",
      "La Ermita: Visitaremos La Ermita, un lugar sagrado que ha sido testigo de eventos históricos significativos. Aprenderemos más sobre el significado cultural y religioso de este sitio.",
      "Castillo de San Severino: Exploraremos el Castillo de San Severino, una fortaleza histórica que desempeñó un papel crucial en la defensa de la ciudad. Descubriremos la arquitectura militar y la historia que rodea este imponente castillo.",
      "Cueva de Saturno (entrada $5): Concluiremos nuestro recorrido explorando la Cueva de Saturno, un cenote subterráneo con aguas cristalinas. Los visitantes tendrán la oportunidad de nadar y disfrutar de la belleza natural única de esta formación geológica.",
      "Regreso al hotel alrededor de las 2:00 pm.",
    ]
  },
  {
    "title": "Excursión de un día a Varadero desde La Habana",
    "place": "Matanzas",
    "details": [
      "Recogida en el hotel o B&B en un auto clásico a las 8:00 am.",
      "Salida hacia Varadero por la costa con hermosos paisajes.",
      "Parada opcional en el Puente Bacunayagua: Haremos una parada en el puente más alto de Cuba con 112 m de altura. Desde este mirador, los visitantes pueden disfrutar de hermosas vistas panorámicas y degustar el mejor Cóctel de Piña de Cuba.",
      "Viaje a la Playa Coral para hacer snorkel (entradas no incluidas, 10 USD por persona): Exploraremos las aguas cristalinas de la Playa Coral, ideal para practicar snorkel y disfrutar de la vida marina.",
      "Visita a la cueva abierta de Saturno (entradas no incluidas, 5 USD por persona): Descubriremos la belleza de la Cueva de Saturno, un cenote subterráneo con aguas cristalinas. Los visitantes tendrán la oportunidad de nadar y disfrutar de la belleza natural única de esta formación geológica.",
      "Continuación del viaje a Varadero.",
      "Visita a La Casa Alcapone en Varadero: Exploraremos La Casa Alcapone, que ofrece una visión de la historia y el lujo de la época.",
      "Visita al mercado de Varadero: Sumérgete en la cultura local explorando el mercado de Varadero, donde puedes encontrar artesanías y productos locales.",
      "Visita al Parque Josone: Disfruta de la belleza natural del Parque Josone, un oasis en medio de Varadero con exuberantes jardines y lagos serenos.",
      "Visita a la Mansión Dupon: Exploraremos la elegante Mansión Dupon, un testimonio de la arquitectura histórica de Varadero.",
      "Tiempo libre en la playa: Los visitantes tendrán tiempo para relajarse en las hermosas playas de Varadero.",
      "La excursión concluye alrededor de las 4:30 pm y regresa a La Habana.",
    ]
  },
  {
    "title": "Tour de Trinidad - Cienfuegos (Opcional Nicho)",
    "place": ["Región Central"],
    "details": [
      "Recogida en su alojamiento u hotel a las 06:30 am.",
      "Viaje de tres horas por el campo hacia Cienfuegos.",
      "Excursión en la ciudad de Cienfuegos.",
      "Visita al área de Punta Gorda, el Palacio del Valle y el Hotel Jagua.",
      "Parada opcional en la cascada El Nicho (Esto tiene un costo adicional de 40 euros para pagar el transporte para subir la montaña).",
      "Nota: Si visitamos El Nicho, tendremos menos tiempo para pasar en las otras áreas.",
      "Viaje a Trinidad para disfrutar de la vista del Mar Caribe.",
      "Tiempo libre para almorzar en Trinidad (no incluido).",
      "Paseo por el centro histórico como la Plaza Mayor, La Canchanchara, museos, etc.",
      "Tiempo libre para más paseos o visita al mercado de artesanías si el tiempo lo permite.",
      "Regreso a su hotel alrededor de las 7 pm.",
      "Este tour incluye un auto clásico con aire acondicionado y un guía turístico."
    ]
  },
  {
    "title": "Tour de Tres Ciudades Trinidad - Cienfuegos - Santa Clara",
    "place": ["Región Central"],
    "details": [
      "El viaje también se puede hacer en dos días.",
      "Recogida en su alojamiento u hotel a las 06:00 am.",
      "Viaje de tres horas por el campo hacia Santa Clara.",
      "Parada en el mausoleo de Ernesto Che Guevara y la Plaza de la Revolución.",
      "Parada en el Parque Vidal y recorrido por la ciudad.",
      "Parada en El Tren.",
      "Parada opcional en la cascada El Nicho (Esto tiene un costo adicional de 40 euros para pagar el transporte para subir la montaña).",
      "Nota: Si visitamos El Nicho, tendremos menos tiempo para pasar en las otras áreas. No disponible en el tour de un día.",
      "Viaje a Trinidad para disfrutar de la vista del Mar Caribe.",
      "Tiempo libre para almorzar en Trinidad (no incluido).",
      "Paseo por el centro histórico como la Plaza Mayor, La Canchanchara, museos, etc.",
      "Tiempo libre para más paseos o visita al mercado de artesanías si el tiempo lo permite.",
      "Salida hacia Cienfuegos.",
      "Excursión en la ciudad de Cienfuegos.",
      "Visita al área de Punta Gorda, el Palacio del Valle y el Hotel Jagua.",
      "Regreso a su hotel alrededor de las 9 pm."
    ]
  },
  {
    "title": "Tour Viñales - Soroa",
    "place": "Pinar del Río",
    "details": [
      "Recogida en el hotel o alojamiento a las 8:30 am.",
      "Atravesar la provincia de La Habana para continuar hacia Soroa.",
      "Visita a Soroa, donde puedes disfrutar de un baño en la cascada y visitar el jardín de orquídeas (debes pagar la entrada en ambos lugares, 3-5 USD por persona).",
      "Nota: Si vienes desde Varadero y pasas demasiado tiempo en Soroa, no tendrás suficiente tiempo para disfrutar de Viñales.",
      "Continuación del tour al Valle de Viñales.",
      "Parada en el mirador 'Las Jazmines' (un excelente lugar para la fotografía).",
      "Visita a la casa del agricultor para ver y aprender sobre el tabaco cubano.",
      "Visita al pueblo de Viñales.",
      "Visita a la Cueva del Indio (entrada no incluida, 5 USD por persona).",
      "Visita al Mural de la Prehistoria.",
      "Disfrute de un paseo a caballo (opcional, no incluido, 10-15 USD por persona).",
      "Viaje de regreso a La Habana o Varadero."
    ]
  },
  {
    "title": "Tour por la Ciudad de Varadero por Hora",
    "place": ["Matanzas"],
    "details": [
      "Explora cada rincón de la ciudad de Varadero en un auto clásico descapotable por tiempo. El precio es de $40 USD por hora.",
      "Casa del Todo",
      "Feria de artesanías",
      "Mirador fotográfico",
      "Parque Josone",
      "Bulevar de Varadero",
      "Mansión Xanadú",
      "Delfinario",
      "Marina Varadero"
    ]
  }
        ]            
          },
        
  
    rs: {
      nav:{
        'home':'Начало',
        'places': 'Направления',
        'about': 'О нас',
        'services': 'Услуги',
        'feedback': 'Комментарии',
          matanzas: 'Матансас',
          habana: "Гавана",
          pinar: "Пинар-дель-Рио",
          central: "Центральный регион"
       },
      hero: {
        'h1':'ЛЕГКИЙ ПУТЬ К',
        'h12':'ГОРОД',
        'span':'ИССЛЕДОВАТЬ',
        'p':"Почувствуйте надежность, эффективность и качество, которые может предложить только наша служба такси. Под руководством высококвалифицированных специалистов мы гарантируем безопасную, пунктуальную и комфортную поездку."
        ,'button':'Забронируйте сейчас',
       },
      prov:{
        visit:'Посещать',
          'h2':'Мы поможем вам путешествовать и вы можете проконсультироваться с нами.',
          'p':'Откройте для себя новые горизонты вместе с нами. Путешествуйте, исследуйте и живите в городе.',
          places: [
            {
              name: "Пинар-дель-Рио",
              slug:'Pinar del Río',
              desc: "Табак, моготы, пляжи. Изобильная природа, объект Всемирного наследия, карибская подлинность, захватывающая культура.",
              img: '/images/pinar_rio.webp',
              href: "/"
            },
            {
              name: "Гавана",
              slug:'La Habana',
              desc: "Столица Кубы, колониальная история, культовая архитектура, живая культура, музыка и завораживающие пляжи.",
              img: '/images/cristo_vista_havana.webp',
              href: "/"
            },
            {
              name: "Матансас",
              slug:"Matanzas",
              desc: "Впечатляющие пляжи, теплое климат, разнообразные туристические мероприятия и прекрасное гостеприимство.",
              img: '/images/varadero.webp',
              href: "/"
            },
            {
              name: "Центральный регион",
              slug:"Región Central",
              desc: "Колониальная архитектура, традиционная музыка, красивые пляжи и природные парки.",
              img: '/images/Trinidad.webp',
              href: "/"
            }
         ]
        }    ,
      aboutComp:{
            'h2':"О компании",
            'pdesc':"Мы выделяемся тем, что предоставляем беспрецедентные туристические впечатления, предлагая индивидуальные туры на классических автомобилях, которые передают винтажную сущность острова. Благодаря конкурентоспособным ценам мы стремимся предоставлять качественные услуги, отражающие кубинскую аутентичность и гостеприимство.",
            'p':"Откройте для себя остров вместе с нами и сделайте свой визит на Кубу незабываемым.",
            'secT':"Безопасность",
            'secP':"Мы создаем условия для того, чтобы ваша поездка была полностью безопасной.",
            'conT':"Комфорт",
            'conP':"Путешествуйте с максимальным комфортом и лучшим вниманием.",
           },
      about2:{
            h2:'Получайте лучший опыт работы с нашей рабочей командой.',
            elementos:{
              el1: {
                num: '1',
                title: 'Путешествие к вам',
                text: 'Начните бронирование, отправив сообщение через WhatsApp со своими данными и предпочтениями.',
                активный: false
              },
              el2: {
                num: '2',
                title: 'Найдите свое лучшее место для путешествия',
                text: 'Сотрудничайте с нашей командой, чтобы настроить ваше путешествие в соответствии с вашими потребностями.',
                активный: false
              },
              el3: {
                num: '3',
                title: 'Насладитесь путешествием с удовольствием',
                text: 'Осуществите свое путешествие с нашими лучшими водителями и гидами.',
                активный: true
              }
                   }
        },
      services: {
              h2: "С нами вы найдете лучшее обслуживание на острове.",
              p: "У нас есть команда высококвалифицированных специалистов.",
              serv1h4: 'Различные направления',
              serv1p: 'Исследуйте разнообразие уникальных направлений, от величественных гор до живописных пляжей и оживленных городов.',
              serv2h4: 'Конкурентоспособные цены',
              serv2p: 'Мы предлагаем конкурентоспособные цены, чтобы ваше путешествие было доступным и запоминающимся.',
              serv3h4: 'Простое бронирование',
              serv3p: 'Мы делаем процесс бронирования вашего путешествия простым и быстрым.',
              
        },
       feedback: {
               h2: 'Что говорят клиенты о наших турах',
               p: 'Узнайте, что говорят наши клиенты о наших турах, делясь своими незабываемыми впечатлениями и положительными отзывами.',
       },
       itinerary:[
          
        {
          "title": "Однодневный тур по Гаване",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из отеля ~8:00. Прибытие в отель ~17:00-18:00",
            "Поездка в Гавану занимает от 1,5 до 2 часов. По пути мы сделаем остановку на самом высоком мосту в Кубе (Бакунаягуа), с видами на долину Юмури и океан. Вы сможете попробовать самый вкусный ананасовый коктейль на Кубе (за дополнительную плату).",
            "Остановка возле замка Морро, который предлагает впечатляющие панорамные виды на Гавану. (Вход платный и по желанию).",
            "Затем мы прогуляемся по Малекону, откуда начнется двухчасовая прогулка по Старой Гаване. Среди достопримечательностей Плаза де Сан-Франциско-де-Асис, колокольня старого францисканского монастыря (с платой), музей рома с дегустацией (платный вход), собор Нашей Леди Казанской, Плаза де ла Катедраль, Бодегита-дель-Медио, Дворец испанских губернаторов, Плаза де Армас, Замок Королевских Войск (платный вход), улица Обиспо, отель Амбос-Мундос, Старая Площадь и многое другое.",
            "Посещение Плаза де ла Революсьон, прогулка по центру Гаваны, где вы найдете Капитолий, Гран Театр Гаваны, кафе Флоридита (упоминаемое Хемингуэем) и другие достопримечательности.",
            "Мы покидаем Гавану в 15:00.",
            "Обед не включен в стоимость экскурсии (предполагаемая стоимость обеда составляет 15-20 $€)."
          ]
        },
        {
          "title": "Тур на закате в Гаване",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из вашего жилья или отеля в 10:00 утра в Варадеро.",
            "Примерно два часа пути в Ла-Гавану по северному побережью.",
            "Остановка на самом высоком мосту в Кубе (Бакунаягуа) высотой 112 метров, где вы сможете насладиться лучшим ананасовым коктейлем на Кубе.",
            "Трансфер в Гавану.",
            "Прогулка по Старой Гаване, признанной всемирным наследием ЮНЕСКО в 1982 году.",
            "Посещение Плаза де ла Катедраль.",
            "Посещение Плаза дель Бразо.",
            "Посещение Плаза Вьеха.",
            "Посещение Плаза Сан-Франциско-де-Асис.",
            "Остановка у старейшего замка на Кубе, замка Морро.",
            "Посещение статуи Христа в Гаване.",
            "Отель Насьональ.",
            "Посещение известных баров Хемингуэя, Ла Бодегита дель Медио и Эль Флоридита.",
            "Время для обеда (цены варьируются в зависимости от выбора клиента, не включены).",
            "Маршрут по Малекону и Новой Гаване.",
            "Остановка на Плаза де ла Революсьон.",
            "Время для прогулки по центру города, где вы увидите Капитолий, Большой театр Гаваны и Центральный парк.",
            "Опциональная остановка в Музее Рома.",
            "Посещение табачного магазина.",
            "Вечером мы посетим лучшие места для наслаждения закатом, которые могут быть на Малеконе Гаваны или в замке Морро.",
            "Маршрут завершается на закате.",
            "Возвращение в Варадеро после заката.",
            "Опциональные вещи, которые вы можете добавить к этому туру: 25 долларов США/ЕВРО за час в классическом кабриолете по прибытии в Гавану."
          ]
        },
        {
          "title": "Тур по Гаване + Салют из пушки",
          place: ["Havana", "La Habana"],
          "details": [
            "Забор из вашего жилья или отеля в 10:00 утра.",
            "Прогулка по Старой Гаване, признанной ЮНЕСКО всемирным наследием в 1982 году. Наслаждайтесь свободным временем, и мы рекомендуем посетить рынок художественных изделий, отражающих культурную идентичность народа.",
            "Посещение Плаза де Сан-Франциско-де-Асис, выложенной брусчаткой, расположенной у ворот Гаваны.",
            "Остановка на Плаза де ла Катедраль, одном из самых красивых мест Старой Гаваны.",
            "Остановка на Плаза Вьеха, недавно отреставрированной, обязательная остановка для любителей истории.",
            "Посещение Плаза де Армас, самой старой площади в Гаване.",
            "Остановка в Палацио де лос-Капитанес-Хенералес, одном из самых важных архитектурных сооружений Кубы.",
            "Краткая остановка в отеле Амбос-Мундос, здании в эклектическом стиле, расположенном в Старой Гаване.",
            "Посещение двух известных баров Гаваны, Ла Бодегита дель Медио и Эль Флоридита, для наслаждения вкуснейшими коктейлями.",
            "Обед, рекомендуемый гидом, в самых впечатляющих ресторанах Гаваны, где вы сможете насладиться нашей типичной кубинской кухней.",
            "Поездка на классическом автомобиле по Авенида Малекон, наслаждаясь красивым видом на Бухту Гаваны.",
            "Прогулка по Современной Гаване, эксклюзивное посещение.",
            "Панорамная поездка по районам Ведадо и Мирамар.",
            "Остановка на Плаза де ла Революсьон, одной из крупнейших в мире и дома одного из наиболее интересных музеев всей Кубы.",
            "Панорамная остановка на здании Капитолия, одном из самых эмблематичных мест Гаваны.",
            "Остановка на Центральной Парковой площади Хосе Марти, огромной достопримечательности для путешественников со всего мира, где история великолепных зданий и природы сочетается.",
            "Посещение Большого Театра Гаваны Алисии Алонсо, великолепного здания, являющегося домом Балета и Национальной Оперы Кубы.",
            "Панорамное посещение крепости Морро, важного укрепления, построенного на Кубе в XVI веке.",
            "Панорамное посещение статуи Христа в Гаване, монументального скульптурного произведения высотой около 20 метров.",
            "Ужин в рекомендованных ресторанах Гаваны по вашему выбору. Выберите между креветками или курицей, чтобы насладиться подлинной кубинской кухней.",
            "В 21:00 вы можете насладиться одной из кубинских традиций: 'выстрелом из пушки в девять' во время экскурсии в крепость Сан-Карлос-де-ла-Кабанья.",
            "Поездка обратно в ваше жилье на классическом автомобиле с максимальным комфортом и безопасностью."
          ]
        }, 
        {
        "title": "Тур по Гаване + Тропикана",
        place: ["Havana", "La Habana"],
        "details": [
          "Забор из вашего жилья или отеля в 10:30 утра.",
          "Примерно два часа пути до Гаваны по атлантическому побережью.",
          "Остановка на самом высоком мосту в Кубе, «Бакунаягуа», где вы также можете насладиться лучшим ананасовым коктейлем на Кубе.",
          "Трансфер в Гавану.",
          "Прогулка по Старой Гаване, признанной ЮНЕСКО всемирным наследием в 1982 году.",
          "Посещение Плаза де ла Катедраль.",
          "Посещение Плаза де Арма.",
          "Посещение Плаза Вьеха.",
          "Посещение Плаза де Сан-Франциско-де-Асис.",
          "Остановка в самом старом замке на Кубе, замке Эль-Морро.",
          "Посещение статуи Христа в Гаване.",
          "Посещение знаменитых баров Ла Бодегита дель Медио и Эль Флоридита, где пил легендарный писатель Хемингуэй.",
          "Обед (цены варьируются в зависимости от выбора клиента, не включено).",
          "Проехать по Малекону и Новой Гаване.",
          "Остановка на Плаза де ла Революсьон.",
          "Время для прогулки в центр, где можно увидеть здание Капитолия, Великий Театр Гаваны и Центральный Парк.",
          "Опциональная остановка в Музее Рома.",
          "Посещение табачного магазина.",
          "Посещение кабаре Тропикана (вход оплачивается напрямую клиентом).",
          "После представления, возвращение в Варадеро."
        ]
      },
      {
        "title": "Экскурсия в Циенага-де-Сапата",
         place: ["Matanzas"],
        "details": [
          "Отъезд из отеля в 8:00 утра.",
          "Мы пересекаем остров с севера на юг. Путешествие занимает примерно 2 часа.",
          "По пути мы проедем через города Санта-Марта и Карденас, поселок Ховелланос, где живет много потомков африканских рабов, кооператив под названием Владимир Ильич Ленин, поселок Австралия, плантации сахарного тростника, бананов, цитрусовых, манго и других тропических культур.",
          "Первая остановка на мини-ферме с растениями и животными, характерными для Кубы. За дополнительную плату можно выпить сок сахарного тростника и покататься на быке цебу.",
          "Посещение фермы по разведению крокодилов (5 € с человека).",
          "Посещение 'Лос-Индиос': Мы садимся на моторные лодки и отправляемся на остров с несколькими хижинами и индейскими скульптурами. Эта индейская деревня стоит 12 € с человека и длится примерно 2 часа или дольше.",
          "Обед включен, в меню 4 вида мяса: крокодил, краб, лангуст, креветки, рыба, олень, улитки или кальмары, за 15-20 € с человека. Также включены рис с овощами, салат и напитки.",
          "Карибское море: Мы насладимся Карибским морем в заливе Кочинос, с чистой водой, особенно близко к кораллам.",
          "Сноркелинг: Аренда снаряжения для сноркелинга за 5 € в час. Можно принести собственное снаряжение. Рекомендуется принести хлебные крошки из отеля для кормления рыб и других морских обитателей.",
          "Дайвинг: 25 € за 40 минут для опытных дайверов. Новички доплачивают 10 € за вводный урок. Место для дайвинга легкое, с затонувшими кораблями на глубине 25-30 метров.",
          "Ценоты: Мы посмотрим ценоты или водные ямы в джунглях вокруг залива Кочинос, где можно плавать. По желанию мы можем посетить Casa del Colibrí, чтобы наблюдать за птицами (1 $).",
          "Опциональная остановка для купания на песчаном пляже в поселке Плайя-Ларга.",
          "История: Мы посетим важные исторические места, связанные с Холодной войной в заливе Кочинос, где в 1961 году произошла про-кастрошская вторжение.",
          "Возвращение в Варадеро в 16:00."
        ]
      },
      {
        "title": "Тур по Матансасу",
         place: ["Matanzas"],
        "details": [
          "Отъезд из отеля в 9:00 утра.",
          "Посещение Пещер Белламар (вход $5): Мы исследуем впечатляющие Пещеры Белламар, систему пещер, предлагающую уникальные и впечатляющие формации скал. Мы раскроем богатую геологию и историю этого захватывающего места.",
          "Прогулка по колониальному центру города: Мы погрузимся в историю Матансаса, исследуя его колониальный центр. Мы посетим знаменитую Фармацию Французскую, иконический архитектурный памятник, отражающий влияние французской культуры в регионе.",
          "Миратор Монсеррат: Мы насладимся панорамным видом с Миратора Монсеррат, предлагающего впечатляющую перспективу города и его окрестностей. Это идеальное место для создания незабываемых воспоминаний.",
          "Ла Эрмита: Мы посетим Ла Эрмита, священное место, ставшее свидетелем значимых исторических событий. Мы узнаем больше о культурном и религиозном значении этого места.",
          "Замок Сан-Северино: Мы исследуем Замок Сан-Северино, историческую крепость, которая играла ключевую роль в защите города. Мы раскроем архитектуру военного строения и историю, окружающую этот величественный замок.",
          "Пещера Сатурно (вход $5): Завершим наше путешествие, исследуя Пещеру Сатурно, подземный ценот с кристально чистой водой. Посетители получат возможность поплавать и насладиться уникальной природной красотой этой геологической формации.",
          "Возвращение в отель примерно в 14:00."
        ]
      },
      {
        "title": "Однодневная экскурсия в Варадеро из Гаваны",
         place: ["Matanzas"],
        "details": [
          "Подбор из отеля или B&B на классическом автомобиле в 8:00 утра.",
          "Отправление в Варадеро по побережью с прекрасными пейзажами.",
          "Опциональная остановка на мосту Бакунаягуа: Мы сделаем остановку на самом высоком мосту Кубы высотой 112 метров. С этого смотрового пункта посетители могут насладиться прекрасными панорамными видами и попробовать лучший ананасовый коктейль на Кубе.",
          "Поездка на Пляж Коралл для сноркелинга (билеты не включены, 10 долларов США с человека): Мы исследуем кристально чистые воды Пляжа Коралл, идеальные для занятий сноркелингом и наслаждения морской жизнью.",
          "Посещение открытой пещеры Сатурно (билеты не включены, 5 долларов США с человека): Мы раскроем красоту Пещеры Сатурно, подземного ценота с кристально чистой водой. Посетители получат возможность поплавать и насладиться уникальной природной красотой этой геологической формации.",
          "Продолжение путешествия в Варадеро.",
          "Посещение дома Алькапоне в Варадеро: Мы исследуем Дом Алькапоне, предлагающий взгляд на историю и роскошь эпохи.",
          "Посещение рынка Варадеро: Погрузитесь в местную культуру, исследуя рынок Варадеро, где можно найти ремесла и местные продукты.",
          "Посещение Парка Хосоне: Насладитесь красотой природы Парка Хосоне, оазиса среди Варадеро с изысканными садами и спокойными озерами.",
          "Посещение Особняка Дюпон: Мы исследуем элегантный Особняк Дюпон, свидетельство исторической архитектуры Варадеро.",
          "Свободное время на пляже: У посетителей будет время для отдыха на прекрасных пляжах Варадеро.",
          "Экскурсия завершается примерно в 16:30 и возвращение в Гавану."
        ]
      },
      {
        "title": "Тур по Тринидаду - Сьенфуэгос (опционально Ничо)",
       "place": ["Región Central"],
        "details": [
          "Забор из вашего проживания или отеля в 06:30 утра.",
          "Трехчасовая поездка по сельской местности в Сьенфуэгос.",
          "Экскурсия по городу Сьенфуэгос.",
          "Посещение района Пунта-Горда, дворца дель Валье и отеля Хагуа.",
          "Опциональная остановка у водопада Эль-Ничо (это дополнительно платная услуга в 40 евро за транспортировку до вершины горы).",
          "Примечание: Если мы посещаем Эль-Ничо, у нас будет меньше времени на пребывание в других районах.",
          "Поездка в Тринидад для наслаждения видом на Карибское море.",
          "Свободное время для обеда в Тринидаде (не включено).",
          "Прогулка по историческому центру, такому как Пласа-Майор, Ла-Канчанчара, музеи и т. д.",
          "Свободное время для дополнительных прогулок или посещения рынка сувениров, если время позволяет.",
          "Возвращение в ваш отель примерно в 19:00.",
          "Этот тур включает в себя классический автомобиль с кондиционером и гидом."
        ]
      },
      {
      "title": "Тур по трем городам Тринидад - Сьенфуэгос - Санта-Клара",
     "place": ["Región Central"],
      "details": [
        "Экскурсия также может быть проведена в течение двух дней.",
        "Забор из вашего проживания или отеля в 06:00 утра.",
        "Трехчасовая поездка по сельской местности в Санта-Клару.",
        "Остановка у мавзолея Эрнесто Че Гевары и на Площади Революции.",
        "Остановка в Парке Видал и прогулка по городу.",
        "Остановка на Поезде.",
        "Опциональная остановка у водопада Эль-Ничо (это дополнительно платная услуга в 40 евро за транспортировку до вершины горы).",
        "Примечание: Если мы посещаем Эль-Ничо, у нас будет меньше времени на пребывание в других районах. Не доступно в однодневной экскурсии.",
        "Поездка в Тринидад для наслаждения видом на Карибское море.",
        "Свободное время для обеда в Тринидаде (не включено).",
        "Прогулка по историческому центру, такому как Пласа-Майор, Ла-Канчанчара, музеи и т. д.",
        "Свободное время для дополнительных прогулок или посещения рынка сувениров, если время позволяет.",
        "Отправление в Сьенфуэгос.",
        "Экскурсия по городу Сьенфуэгос.",
        "Посещение района Пунта-Горда, дворца дель Валье и отеля Хагуа.",
        "Возвращение в ваш отель примерно в 21:00."
      ]
    },
    {
      "title": "Тур Виньялес - Сороа",
       "place": "Pinar del Río",
      "details": [
        "Забор из отеля или жилья в 8:30 утра.",
        "Проезд через провинцию Гавана для продолжения пути в Сороа.",
        "Посещение Сороа, где вы можете насладиться купанием у водопада и посетить орхидейный сад (вход в оба места, 3-5 долларов за человека).",
        "Примечание: Если вы приезжаете из Варадеро и проводите слишком много времени в Сороа, у вас не будет достаточно времени, чтобы насладиться Виньялесом.",
        "Продолжение тура в долину Виньялес.",
        "Остановка на смотровой площадке 'Лас Хасминес' (отличное место для фотографий).",
        "Посещение дома фермера, чтобы увидеть и узнать о кубинском табаке.",
        "Посещение деревни Виньялес.",
        "Посещение пещеры Индио (вход не включен, 5 долларов с человека).",
        "Посещение Мураля Преистории.",
        "Поездка на лошадях (опционально, не включено, 10-15 долларов с человека).",
        "Поездка обратно в Гавану или Варадеро."
      ]
    },
    {
      "title": "Тур по городу Варадеро по часам",
       place: ["Matanzas"],
      "details": [
        "Исследуйте каждый уголок города Варадеро на открытом классическом автомобиле на время. Цена - 40 долларов США в час.",
        "Casa del Todo",
        "Ярмарка ремесел",
        "Фотографическая смотровая площадка",
        "Парк Хосоне",
        "Бульвар Варадеро",
        "Особняк Санаду",
        "Дельфинарий",
        "Марина Варадеро"
      ]
    }
                ] 
},
} as const;
