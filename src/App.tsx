
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

  const handleHeroDemoClick = () => {
    // Placeholder for demo video modal trigger
    alert("Demo video modal placeholder: 'Cek transformasi 60 detik!'");
  };

  return (
    <div className="min-h-screen font-sans bg-bgLight text-textDark selection:bg-primary/20 selection:text-primaryDark">
      <Header />
      
      <main>
        <HeroSection 
          onFormScroll={handleHeroFormScroll} 
          onDemoClick={handleHeroDemoClick} 
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
