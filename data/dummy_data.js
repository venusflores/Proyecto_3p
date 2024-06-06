import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Disney', '#1759c2'),
  new Category('c2', 'Pixar', '#c5dafc'),
  new Category('c3', 'Marvel', '#a60808'),
  new Category('c4', 'Sart Wars', '#faf2f2'),
  new Category('c5', 'National Geographic', '#f2db05'),
  new Category('c6', 'Universal', '#1c6110'),
  new Category('c7', 'Sony', '#370a80'),
  new Category('c8', 'Paramount', '#d95821'),
  new Category('c9', 'DreamWorks', '#9e5472'),
  new Category('c10', 'Warner Bros', '#939e54')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Moana',
    'Familiar',
    'Acción y Aventura',
    'Fantastica',
    'https://m.media-amazon.com/images/I/71RgCh-pLWL._AC_UF894,1000_QL80_.jpg',
    20,
    [
      'Duracion: 1h 48min',
      'Fecha de estreno:2016',
      'Dirección: John Musker Ron Clements',
      'Calificacion 5/5'
    ],
    [
      'Hace 300 años, los marinos viajaban por el Pacifico descubriendo las islas',
      'de Oceania. Pero durante un milenio, se detuvieroon sus viajes y nadie sabe',
      'por que. Moana se encuentra con el semidios Maui',
      'que la convierte en una gran exploradora, cumple',
      'la mision de sus ancestros y descubre lo unico que siempre ha buscado: su',
      'Propia identidad.Algunas secuencias o formas con luces parpadeantes',
      'pueden afectar a los espectadores fotosensibles.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c1','c2'],
    'El extraño mundo de jack',
    'Familiar',
    'Fantasticas',
    'Animacion',
    'https://www.okchicas.com/wp-content/uploads/2017/08/secuela-el-extra%C3%B1o-mundo-de-jack-3.jpg',
    10,
    [
      'Duracion: 1h 20min',
      'Fecha de estrenos: 1993',
      'Dirección:Henry Selick',
      'Calificacion: 5/5',
    ],
    [
      'Entra en un mundo extraordinario repleto de magia, en el que cada festival',
      'tiene su propio mundo.Esta es la historia de Jack Slellington, que vive en la',
      'ciudad de Halloween y de todas las cosas que dan miedo. Aburrido de los',
      'sustos de siempre, Jack quiere transladar la magia de la ciudad de Navidad y',
      'ser Papá Noel. Dependerá de Sally, la muñeca que lo ama, que todo vuelva a',
      'la normalidad',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c2'],
    'Toy Story',
    'Familiar',
    'Comedia',
    'Amistad',
    'Acción y Aventura',
    'https://es.web.img3.acsta.net/c_310_420/pictures/23/02/09/12/49/3792573.jpg',
    45,
    [
      'Duración: 1h 22min',
      'Dirección: John Lasseter',
      'Fecha de estreno: 1995'
    ],
    [
      'Es un mundo donde los juguetes tienen vida propia, este viaje se vive bajo la',
      'perpectiva de dos rivales: Woody, un vaquero hablador, y Buzz Lightyear, una',
      'heroica figura de acció espacial.. La extraña pareja sabe dejar a un lado sus',
      'diferencias cuando se separan de su dueño, Andy, y emprenden una misión',
      'llena de aventuras donde solo pueden sobrevivir formando una alianza'
    ],
    false,
    false,
    false,
    true
  ),

 
  new Meal(
    'm4',
    ['c2'],
    'Cars',
    'Deportes',
    'Familiar',
    'Comedia',
    'https://pics.filmaffinity.com/Cars-746710621-large.jpg',
    60,
    [
      'Duración: 1h 57min',
      'Fecha de estreno: 2006',
      'Dirección: John Lasseter',
      'Calificación: 5/5'
    ],
    [
      'El celebre coche de carreras Rayo McQueen vive en el carril',
      'rápido... hasta que se desvía y aperece en Radiador Springs',
      'olvidado de la Ruta 66. Allí conoce a Sally,Mate,Doc Hudson',
      'y un montón de diversos personajes que le ayudan a descubrir',
      'que en la vida hay algo más que trofeos y fama'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm4',
    ['c3'],
    'Vengadores:La era de ultron',
    'Ciencia Ficción',
    'Superhéroes',
    'Acción y aventura',
    'https://img.europapress.es/fotoweb/fotonoticia_20150504131935_1200.jpg',
    60,
    [
      'Duración: 2h 25min',
      'Fecha de estreno: 2015',
      'Dirección: Joss Whedon',
      'Calificación: 5/5',
      'Con: Robet Downwy Jr, Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner'
    ],
    [
      'Las buenas intenciones desatan el caos cuando Tony Stark',
      'crea involuntariamente a Ultrón, un terrible moustro de',
      'I.A. que quiere lograr "la paz munndial" mediante una extención en masa.',
      'Ahora, Iron Man y el resto de los Vengadores deben reunirse para derrotar a',
      'Ultrón y salvar a la humanidad... si pueden. Algunas secuencias o formas con',
      'luces parpadeantes pueden afectar a los espectadores fotosensibles'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm4',
    ['c3'],
    'The Marvels',
    'Ciencia Ficción',
    'Superhéroes',
    'Acción y aventura',
    'https://www.pantalla90.es/wp-content/uploads/2023/11/nuevo-poster-de-the-marvels-original.jpg',
    60,
    [
      'Duración: 1h 47min',
      'Fecha de estreno: 2023',
      'Dirección: Nila DaCosta',
      'Calificación: 5/5',
      'Con: Brie Larson, Teyonah Parris, Iman Vellani, Samuel L. Jackson, Zawe Ashton, Seo-Jun Park'
    ],
    [
      'Cerol Danvers, Alias la capitana Marvel, ha recuperado su identidad de los',
      'tiránicos kree y se ha vengado de la inteligencia Suprema. Pero las',
      'consecuencias imprevistas hacen que carol cargue con el peso de un universo',
      'desestabilizado.'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm4',
    ['c4'],
    'Episode IV -A New Hope',
    'Ciencia Ficción',
    'Acción y aventura',
    'https://www.historylatam.com/sites/default/files/styles/wide/public/images/2014/04/15/se-estrena-star-wars-episode-iv-a-new-hope-que-gano-seis-premios-oscar.-600x310.jpg',
    60,
    [
      'Duración: 2h 6min',
      'Fecha de estreno: 1977',
      'Dirección: George Lucas',
      'Calificación: 5/5'
    ],
    [
      'La nave en la que viaja la princesa Leia es capturada por',
      'las tropas imperiales al mando del temible Darth Vader.',
      'Antes de ser atrapada, Leia consigue introducir un mensaje',
      'en su robot R2-D2, quien acompañado de su inseparable',
      'C-3PO logra escapar, tras aterrizar en el planeta Tattooine son capturado.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    '',
    'Los secretos de los pulpos',
    'Documental',
    'https://pbs.twimg.com/media/GMauf0SXIAEG2Hm.png',
    15,
    [
      'Fecha de estreno:2024',
      "Calificación: 4/5",
      'Con: Paul Rudd'
    ],
    [
      'Los pulpos son como extraterrestres en la Tierra: tienen',
      'tres corazones, sangre azul y la capacidad de colarse por',
      'un espacio del tamaño de su globo ocular, pueden usar',
      'herramientas, cambiar su cuerpo e incluso comunicarse',
      'con especies diferentes.'
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    '',
    'La playa de los tiburones',
    'Documental',
    'https://www.lavanguardia.com/peliculas-series/images/movie/backdrop/2021/7/w1280/gSpADcISuvwNnFBaVkg95OARMq1.jpg',
    15,
    [
      'Fecha de estreno:2021',
      "Calificación: 4/5",
      'Con: Sally Aitken'
    ],
    [
      'Los pulpos son como extraterrestres en la Tierra: tienen',
      'tres corazones, sangre azul y la capacidad de colarse por',
      'un espacio del tamaño de su globo ocular, pueden usar',
      'herramientas, cambiar su cuerpo e incluso comunicarse',
      'con especies diferentes.'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Monster University',
    'Familiar',
    'Amistad',
    'Comedia',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      'Duracion: 1h 45min',
      'Fecha de estreno: 2013',
      'Dirección: Dan Scalon',
      'Calificación: 5/5'
    ],
    [
      'En sus días universitarios, la feroz rivalidad entre Mike',
      'Wazowski y Sulley provoca que ambos sean expulsados',
      'Wazowski y Sulley provoca que ambos sean expulsados'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'SpiderMan: A travez del spiderverso',
    'Acción y aventura',
    'Comedia',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      'Fecha de estreno:2023',
      'Directores: Joaquim Dos Santos, Kemp Powers, Justin K. Thompson'
    ],
    [
      'Después de reunirse con Gwen Stacy, el amigable vecino',
      'de tiempo completo de Brooklyn Spiderman, es lanzado a',
      'través del multiverso, donde se encuentra a un equipo de',
      'gente araña encomendada con proteger su mera existencia.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Rescate en el tiempo',
    'Acción',
    'Aventura',
    'https://bitacoradecora.galiciae.com/wp-content/uploads/2021/05/D_NQ_NP_605625-MLA25484232486_042017-O.jpg',
    35,
    [
      'Fecha de estreno: 2003 ',
      'Director: Richard Donner',
      'Recaudación: 43,9 millones USD'
    ],
    [
      'Aventureros viajan en el tiempo hasta la Francia del siglo',
      'XIV para salvar a un profesor atrapado en medio de la',
      'guerra.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Spirit:El corcel indomable',
    'Familiar',
    'https://m.media-amazon.com/images/S/pv-target-images/1a58e74356b2b511703aec759717c8f4a2fef96d719b2776220105a663dc1da2.jpg',
    45,
    [
      'Fecha de estreno: 19 de julio de 2002 ',
      'Directores: Kelly Asbury, Lorna Cook',
      'Duracion: 1h 23min'
      
    ],
    [
      'Un caballo salvaje viaja a través de la frontera americana,',
      'hace amistad con un indio lakota y encuentra el amor con',
      'una yegua.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Space Jam Una nueva era',
    'Comedia',
    'Deportes',
    'https://cdn.milenio.com/uploads/media/2021/07/15/donde-ver-space-jam-una.jpg',
    30,
    [
      'Fecha de estreno: 16 de julio de 2021',
      'Director: Malcolm D. Lee',
      'Directores artísticos: Eric Sundahl, Julien Pougnier'
    ],
    [
      'Atrapado en el espacio digital, la superestrella del',
      'baloncesto LeBron James se une a la banda de los Looney',
      'Tunes para derrotar al Goon Squad en un juego de',
      'baloncesto y salvar a su hijo.'
    ],
    true,
    true,
    true,
    true
  )
];