import OfferSection from "~/components/Offersection";
import HeroSection from "~/components/Herosection";
import Step from "~/components/3StepSection";
import CategorySection from "~/components/Categorysection";
import JobCardSection from "~/components/Jobcardssection";



function Home() {
    return (
        <>       
           <HeroSection />
           <OfferSection />
           <Step/>
           <CategorySection/>
            <JobCardSection/>
        </>    
    );
}

export default Home;
