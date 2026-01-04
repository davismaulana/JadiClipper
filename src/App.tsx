
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointTimeline from './components/PainPointTimeline';
import SolutionSection from './components/SolutionSection';
import CreatorTestimonials from './components/CreatorTestimonials';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactMetricsSection from './components/ImpactMetricsSection';
import WhyCreatorsLoveItSection from './components/WhyCreatorsLoveItSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ComparisonSection from './components/ComparisonSection';
import EarlyAccessCTA from './components/EarlyAccessCTA';
import EarlyAccessForm from './components/EarlyAccessForm';
import RoadmapSection from './components/RoadmapSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useScrollTo } from './hooks/useScrollTo';

function App() {
  const scrollTo = useScrollTo();

  const handleHeroFormScroll = () => {
    scrollTo('early-access');
  };

  return (
    <div className="min-h-screen font-sans bg-bgLight text-textDark selection:bg-primary/20 selection:text-primaryDark">
      <Header />

      <main>
        <HeroSection
          onFormScroll={handleHeroFormScroll}
        />

        <PainPointTimeline />

        <SolutionSection />

        <CreatorTestimonials />

        <FeaturesSection />

        <HowItWorksSection />

        <ImpactMetricsSection />

        <WhyCreatorsLoveItSection />

        <TargetAudienceSection />

        <ComparisonSection />

        <div id="early-access">
          <EarlyAccessCTA />
          <EarlyAccessForm />
        </div>

        <FAQSection />

        <RoadmapSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
