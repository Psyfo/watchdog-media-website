'use client';
import FilmSupport from './components/film-support';
import Hero from './components/hero';
import Welcome from './components/welcome';

export default function Home() {
  return (
    <div className=''>
      <main>
        <Hero />
        <Welcome />
        <FilmSupport />
      </main>
    </div>
  );
}
