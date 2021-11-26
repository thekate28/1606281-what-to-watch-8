import { FilmCard } from '../FilmCard';

export function FilmList() {
  const filmCardProps = [{
    id: 1,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 2,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 3,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 4,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 5,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 6,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 7,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 8,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  {
    id: 9,
    title: 'Midnight Special',
    link: 'film-page.html',
  },
  ];

  return (
    <div className="catalog__films-list">
      {
        filmCardProps.map((item) =>
          <FilmCard title={item.title} link={item.link} key={item.id}/>)
      }
    </div>
  );
}
