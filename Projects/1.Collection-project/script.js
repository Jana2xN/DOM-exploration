const collection = [
  {
    picture: 'images/Doctor-Who.png',
    name: 'Doctor Who',
    releaseYear: 1963,
    genre: 'Sci-Fi',
    description: 'The further adventures in time and space of the alien adventures known as the Doctor and their companions from planet earth.',
  },
  {
    picture: 'images/Around-The-World-In-80-Days.png',
    name: 'Around the World in 80 Days',
    releaseYear: 2021,
    genre: 'Adventure',
    description: 'Gentleman adventurer Phileas Fogg sets out on a quest to travel around the world and back home in a period of 28 days.',
  },
  {
    picture: 'images/Miracle-Workers.png',
    name: 'Miracle Workers',
    releaseYear: 2019,
    genre: 'Comedy',
    description: 'A comedy set in the offices of Heaven Inc. When God plans to destroy the Earth, two low-level angels must convince their boss to save humanity. They bet him they can pull off their most impossible miracle yet: help two humans fall in love.',
  },
  {
    picture: 'images/The-Great-British-Bake-Off.png',
    name: 'The Great British Bake Off',
    releaseYear: 2010,
    genre: 'Reality',
    description: "Bakers attempt three challenges each week trying to impress the judges enough to go through to the next round and eventually are crowned Britain's best amateur baker.",
  },
  {
    picture: 'images/Miranda.png',
    name: 'Miranda',
    releaseYear: 2009,
    genre: 'Comedy',
    description: 'Socially inept Miranda always gets into awkward situations; working in her joke shop with best friend Stevie, being hounded by her pushy mother, and around her crush Gary.',
  },
  {
    picture: 'images/Merlin.png',
    name: 'Merlin',
    releaseYear: 2008,
    genre: 'Fantasy',
    description: 'These are the brand new adventures of Merlin, the legendary sorcerer as a young man when he was just a servant to young Prince Arthur on the royal court of Camelot, who has soon become his best friend and turned Arthur into a great king.',
  },
  {
    picture: 'images/The-Big-Bang-Theory.png',
    name: 'The Big Bang Theory',
    releaseYear: 2007,
    genre: 'Comedy',
    description: 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
  },
  {
    picture: 'images/Good-Omens.png',
    name: 'Good Omens',
    releaseYear: 2019,
    genre: 'Fantasy',
    description: 'Now exiled from Heaven and Hell, Aziraphale and Crowley must team up once again after the mysterious arrival of a familiar face.',
  },
  {
    picture: 'images/His-Dark-Materials.png',
    name: 'His Dark Materials',
    releaseYear: 2019,
    genre: 'Adventure',
    description: 'A young girl is destined to liberate her world from the grip of the Magisterium which represses people\'s ties to magic and their animal spirits known as daemons.',
  },
  {
    picture: 'images/A-Discovery-Of-Witches.png',
    name: 'A Discovery of Witches',
    releaseYear: 2018,
    genre: 'Fantasy',
    description: 'Diana Bishop, historian and witch, accesses Ashmole 782 and knows she must solve its mysteries. She is offered help by the enigmatic Matthew Clairmont, but he\'s a vampire and witches should never trust vampires.',
  },
  {
    picture: 'images/One-Day-At-A-Time.png',
    name: 'One Day at a Time',
    releaseYear: 2017,
    genre: 'Comedy',
    description: 'Follows three generations of the same Cuban-American family living in the same house: a newly divorced former military mother, her teenage daughter and tween son, and her old-school mother.',
  },
  {
    picture: 'images/The-Nanny.png',
    name: 'The Nanny',
    releaseYear: 1993,
    genre: 'Comedy',
    description: 'After being fired from her job and dumped by her boyfriend, a cosmetics saleswoman becomes the nanny to the three children of a rich English widower. As time passes, the two fall for each other.',
  },
];

const container = document.querySelector('.container');

collection.forEach((series) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = series.picture;
    img.alt = series.name;

    const title = document.createElement('h3');
    title.textContent = series.name;

    const year = document.createElement('p');
    year.textContent = `Release Year: ${series.releaseYear}`;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${series.genre}`;

    const description = document.createElement('p');
    description.textContent = series.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(genre);
    card.appendChild(description);

    container.appendChild(card);
});