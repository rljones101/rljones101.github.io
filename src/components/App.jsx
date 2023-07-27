import "../App.css";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import Footer from "./Footer";
import AboutMeSection from "./AboutMe";
import ProfileSummary from "./ProfileSummary";
import ProfileImage from "./ProfileImage";
import ProficientSkills from "./ProficientSkills";
import FeaturedSiteSection from "./FeaturedSiteSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";
import { ProjectsProvider } from "../context/ProjectsProvider";

function App() {
  return (
    <div id="app" className="main-content-wrapper">
      <ProjectsProvider>
        <Header />
        <Main>
          <Nav />
          <AboutMeSection>
            <ProfileSummary />
            <ProfileImage />
          </AboutMeSection>
          <ProficientSkills />
          <FeaturedSiteSection />
          <PortfolioSection />
          <SkillsSection />
        </Main>
        <Footer />
      </ProjectsProvider>
    </div>
  );
}

export default App;
