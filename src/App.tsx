
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
import EarlyAccessCTA from './components/EarlyAccessCTA';
import EarlyAccessForm from './components/EarlyAccessForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
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
        
        <div id="early-access">
          <EarlyAccessCTA />
          <EarlyAccessForm />
        </div>
        
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
