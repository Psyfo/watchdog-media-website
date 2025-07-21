'use client';
import Awards from './components/awards';
import CreativeServices from './components/creative-services';
import FilmSupport from './components/film-support';
import Hero from './components/hero';
import Productions from './components/productions';
import Welcome from './components/welcome';

export default function Home() {
  return (
    <div className=''>
      <main>
        <Hero />
        <Welcome />
        <FilmSupport />
        <CreativeServices />
        <Awards />
        <Productions />
      </main>
    </div>
  );
}
