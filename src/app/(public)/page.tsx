import HeroSection from '../components/hero-section';
import ManifestoSection from '../components/welcome-section';
import ProductionSupportSection from '../components/film-support-section';
import ServicesPreviewSection from '../components/creative-services-section';
import SelectedWorkSection from '../components/productions-section';
import EmpowermentSection from '../components/empowerment-section';
import AwardsPressSection from '../components/awards-section';
import ImageBand from '@/components/ui/ImageBand';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ProductionSupportSection />
      <ImageBand
        src="/images/cinema-camera.jpg"
        alt="A cinema camera rigged and ready on a Watchdog Media set."
        position="center"
        caption={
          <div>
            <p className="wd-kicker">Behind every frame</p>
            <p className="mt-3 max-w-2xl font-display text-2xl italic leading-snug text-white md:text-4xl">
              The gear is exacting. The craft is human.
            </p>
          </div>
        }
      />
      <ServicesPreviewSection />
      <SelectedWorkSection />
      <EmpowermentSection />
      <AwardsPressSection />
    </>
  );
}
