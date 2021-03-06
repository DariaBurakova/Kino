import Avatar from '../assets/avatar.jpeg'
import Hurry from '../assets/garri.jpeg'
import Everest from '../assets/everest.jpeg'
import SnowWhite from '../assets/belo.jpeg'
import Matrix from '../assets/matrica.jpeg'
import Spiderman from '../assets/chel.jpeg'

import alfonsocuaron from '../assets/alfons.jpeg'
import denielredclif from '../assets/deniel.webp'
import jamescameron from '../assets/cameron.webp'
import zoi from '../assets/zoi.jpg'

export const mockFilms = [
  {
    id: 1,
    img: Avatar,
    title: 'Аватар',
    route: 'avatar',
    score: '7.9',
    age: 18,
    year: 2009,
    country: 'США',
    genre: 'Фантастика',
    director: [{ name: 'Джеймс Кэмерон' }],
    actors: [
      { name: 'Зои Салдана' },
      { name: 'Сэм Уортингтон' },
      { name: 'Сигурни Уивер' }
    ],
    description: 'По сюжету ресурсодобывающая корпорация угрожает существованию местного племени человекоподобных разумных существ — на’ви.',
    video: {
      href: 'https://vk.com/video_ext.php?oid=-166039245&id=456239274&hash=e9b2b4f6f9b6374f&hd=2',
      width: '853',
      height: '480'
    }
  },
  {
    id: 2,
    img: Hurry,
    title: 'Гарри Поттер и узник Азкабана',
    route: 'hurrypotter-azkaban',
    score: '8.6',
    age: 6,
    year: 2004,
    country: 'США, Великобритания',
    genre: 'Фэнтези',
    director: [{ name: 'Альфонсо Куарон' }],
    actors: [
      { name: 'Дэниел Рэдклифф' },
      { name: 'Руперт Гринт' },
      { name: 'Эмма Уотсон' }
    ],
    description: 'Третий год учёбы Гарри и его друзей в Хогвартсе.Беглый маг, тайны прошлого и путешествия во времени. В третьей части поттерианы Альфонсо Куарон сгущает краски',
    video: {
      href: 'https://vk.com/video_ext.php?oid=-203784891&id=456240166&hash=b39d0a992522ca19&hd=2',
      width: '853',
      height: '480'
    }
  },
  {
    id: 3,
    img: Everest,
    title: 'Эверест',
    route: 'everest',
    score: '7.2',
    age: 18,
    year: 2015,
    country: 'США, Великобритания',
    genre: 'Фильм-катастрофа',
    director: [{ name: 'Балтазар Кормакур' }],
    actors: [
      { name: 'Джейсон Кларк' },
      { name: 'Джош Бролин' },
      { name: 'Джейк Джилленхол' }
    ],
    description: 'В основе фильма лежат реальные события, произошедшие в Гималаях в мае 1996 года.'
  },
  {
    id: 4,
    img: SnowWhite,
    title: 'Белоснежка и охотник',
    route: 'snowwhite',
    score: '8.0',
    age: 16,
    year: 2012,
    country: 'США',
    genre: 'Фэнтези',
    director: [{ name: 'Руперт Сандерс' }],
    actors: [
      { name: 'Кристен Стюарт' },
      { name: 'Шарлиз Терон' },
      { name: 'Крис Хемсворт' }
    ],
    description: 'В королевство Табор вторгается армия стеклянных солдат.Король Магнус разбивает врагов, освобождает прекрасную пленницу.'
  },
  {
    id: 5,
    img: Matrix,
    title: 'Матрица',
    route: 'matrix',
    score: '8.9',
    age: 16,
    year: 1999,
    country: 'США, Австралия',
    genre: 'Фантастика, боевик',
    director: [
      { name: 'Братья Вачовски' }
    ],
    actors: [
      { name: 'Киану Ривз' },
      { name: 'Лоуренс Фишборн' },
      { name: 'Керри-Энн Мосс' },
      { name: 'Хьюго Уивинг' },
      { name: 'Джо Пантолиано' }
    ],
    description: 'Фильм изображает будущее, в котором реальность, существующая для большинства людей, в действительности является симуляцией, созданной разумными машинами, чтобы подчинить и усмирить человечество, в то время как тепло и электрическая активность их тел используются машинами в качестве источника энергии. Немногие люди, высвободившиеся из «мира снов» и выбравшиеся в реальность, вступают в партизанскую войну против машин…',
    trailer: {
      href: 'https://ok.ru/videoembed/1978843204301',
      width: '560',
      height: '315'
    },
    video: {
      href: 'https://vk.com/video_ext.php?oid=-195720489&id=456239928&hash=06eb9aaef5411fc1&hd=2',
      width: '853',
      height: '480'
    }
  },
  {
    id: 6,
    img: Spiderman,
    title: 'Человек-паук',
    route: 'spiderman',
    score: '8.5',
    age: 16,
    year: 2002,
    country: 'США',
    genre: 'Фантастика',
    director: [
      { name: 'Йен Брайс' }
    ],
    actors: [
      { name: 'Тоби Магуайр' },
      { name: 'Клифф Робертсон' },
      { name: 'Кирстен Данст' }
    ],
    description: 'Школьник-неудачник Питер Паркер становится супергероем. Тоби Магуайр в культовом кинокомиксе Сэма Рэйми.',
    video: {
      href: 'https://vk.com/video_ext.php?oid=-20063552&id=456240713&hash=28eeb39b1dd4986e&hd=2',
      width: '853',
      height: '480'
    }
  }
]

export const mockPerson = [
  {
    img: alfonsocuaron,
    name: 'Альфонсо Куарон',
    route: 'alfonsocuaron',
    slug: 1,
    birthday: '1961',
    birthplace: 'Мексика',
    description: 'Mексиканский кинорежиссёр, сценарист, продюсер и монтажёр',
    status: 'new'
  },
  {
    img: denielredclif,
    name: 'Дэниел Рэдклифф',
    route: 'denielredclif',
    slug: 2,
    birthday: '1989',
    birthplace: 'Англия',
    height: '165',
    description: 'Британский актёр театра, кино и телевидения, продюсер. Известен как исполнитель роли Гарри Поттера в многолетней серии одноимённых фильмов, снятых по произведениям писательницы Джоан Роулинг.',
    status: 'new',
    timestamps: '1999 — настоящее время'
  },
  {
    img: jamescameron,
    name: 'Джеймс Кэмерон',
    route: 'jamescameron',
    slug: 1,
    birthday: '1954',
    birthplace: 'Канада',
    description: 'Кинорежиссёр, наиболее известный по созданию научно-фантастических и эпических фильмов. Кэмерон впервые добился признания за режиссуру фильма «Терминатор»',
    status: 'new'
  },
  {
    img: zoi,
    name: 'Зои Салдана',
    route: 'zoisoldana',
    slug: 2,
    birthday: '1978',
    birthplace: 'США',
    height: '170',
    description: 'Американская актриса и танцовщица',
    status: 'new'
  }
]

export const mockCarousel = [
  {
    src: 'https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2018/02/BP-08-copy.jpg'
  },
  {
    src: 'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg'
  },
  {
    src: 'https://avatars.mds.yandex.net/get-zen_doc/1888829/pub_5d8c753179c26e00ae002ede_5d8cd9120ce57b00ade9d04d/scale_1200'
  },
  {
    src: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silent-running-1971-002-poster.jpg?itok=Ho6VqqL5'
  }
]

export const mockGenres = [{
  route: 'comedy',
  name: 'Комедии'
},
{
  route: 'horror',
  name: 'Ужасы'
},
{
  route: 'sf',
  name: 'Фантастика'
},
{
  route: 'thriller',
  name: 'Триллеры'
},
{
  route: 'action',
  name: 'Боевики'
},
{
  route: 'fantasy',
  name: 'Фэнтези'
},
{
  route: 'melodrama',
  name: 'Мелодрамы'
},
{
  route: 'drama',
  name: 'Драмы'
},
{
  route: 'family',
  name: 'Семейные'
},
{
  route: 'history',
  name: 'Исторические'
},
{
  route: 'documental',
  name: 'Документальные'
},
{
  route: 'biography',
  name: 'Биографии'
}
]

export const mockComments = [
  {
    filmRoute: 'avatar',
    username: 'Гость 1',
    comment: 'Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1,Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1.',
    datetime: '18.04.2022, 18:30',
    id: '1'
  },
  {
    filmRoute: 'hurrypotter-azkaban',
    username: 'Гость 8',
    comment: 'Текст коментария 2, Текст коментария 2, Текст коментария 2, Текст коментария 2',
    datetime: '18.04.2022, 18:30',
    id: '2'
  },
  {
    filmRoute: 'avatar',
    username: 'Гость 2',
    comment: 'Текст коментария3',
    datetime: '18.04.2022, 19:00',
    id: '3'
  },
  {
    filmRoute: 'snowwhite',
    username: 'Гость 2',
    comment: 'Текст коментария 4, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
    datetime: '18.04.2022, 18:30',
    id: '4'
  },
  {
    filmRoute: 'matrix',
    username: 'Гость 4',
    comment: 'Текст коментария 5, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
    datetime: '18.04.2022, 19:00',
    id: '5'
  },
  {
    filmRoute: 'everest',
    username: 'Гость 2',
    comment: 'Текст коментария 6',
    datetime: '18.04.2022, 19:00',
    id: '6'
  },
  {
    filmRoute: 'hurrypotter-azkaban',
    username: 'Гость 1',
    comment: 'Текст коментария 7',
    datetime: '18.04.2022, 19:00',
    id: '7'
  }
]
