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
import ContactSection from "./ContactSection";

// const arr = [
//   "p",
//   "e",
//   "r",
//   "f",
//   "e",
//   "c",
//   "t",
//   " ",
//   "m",
//   "a",
//   "k",
//   "e",
//   "s",
//   " ",
//   "p",
//   "r",
//   "a",
//   "c",
//   "t",
//   "i",
//   "c",
//   "e",
// ];

// function reverseWords(input) {
//   // join the sting values together
//   let str = input.join("");
//   // split on empty string
//   const arr = str.split(" ");
//   const newArr = [];
//   while (arr.length > 0) {
//     const lastEl = arr.pop();
//     newArr.push(lastEl);
//   }
//   return newArr.join(" ").split("");
// }
// console.log(reverseWords(arr));

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
          <div className="skills-and-contact-bg">
            <SkillsSection />
            <ContactSection />
          </div>
        </Main>
        <Footer />
      </ProjectsProvider>
    </div>
  );
}

export default App;
