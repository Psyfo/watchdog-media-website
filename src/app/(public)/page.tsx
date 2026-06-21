import HeroSection from '../components/hero-section';
import ManifestoSection from '../components/welcome-section';
import ProductionSupportSection from '../components/film-support-section';
import ServicesPreviewSection from '../components/creative-services-section';
import SelectedWorkSection from '../components/productions-section';
import EmpowermentSection from '../components/empowerment-section';
import AwardsPressSection from '../components/awards-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ProductionSupportSection />
      <ServicesPreviewSection />
      <SelectedWorkSection />
      <EmpowermentSection />
      <AwardsPressSection />
    </>
  );
}
