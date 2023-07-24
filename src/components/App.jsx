import { useEffect, useReducer } from "react";
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

const projects = [
  {
    id: 1,
    image: "videos.png",
    name: "OpinionRateIt",
    tech: ["Vue 3", "HTML", "Tailwind CSS", "Node", "Express", "MongoDB"],
    description:
      "Allows users to signup with their YouTube account. They can search for existing content from YouTube and add this to the application. It provides user feedback via metrics that other users enter and interact with. This was to created to give the reviewer insight on their review content and adjust as needed.",
    sourceUrl:
      "https://gitfront.io/r/rljones101/RVLYyHZkZ835/opinionrateit-site/",
    siteUrl: "https://dev.opinionrateit.com/",
  },
  {
    id: 2,
    image: "cat-facts.png",
    name: "Cat Facts",
    tech: ["React", "HTML", "Tailwind CSS"],
    description:
      "This is a fun approval system board that is similar to Jira. This was created in order to learn more about React development. It allows users to create quotes, approve or deny them. It also allows the user to sort each column by date.",
    sourceUrl: "https://github.com/rljones101/cat-facts",
    siteUrl: "https://cat-quotes-approval-system.netlify.app/",
  },
  {
    id: 3,
    image: "ds-client-portal.png",
    name: "Client Portal",
    tech: ["Vue 2", "HTML", "Tailwind CSS"],
    description:
      "This is a client portal that was created to allow users to login after events and view specific metrics for live events. Collect analysis based on a date range. Add and edit events. And also control the QR codes that are used during the events.",
    sourceUrl:
      "https://gitfront.io/r/rljones101/jXWsu2S5Aek9/ds-metrics-portal/",
    siteUrl: "",
  },
  {
    id: 4,
    image: "app-editor.png",
    name: "App Editor",
    tech: ["Vue 2", "HTML", "Tailwind CSS"],
    description:
      "An editor that gave that provided users a way to create the live app experience at a given event. It allowed them to sort the content, update images, context and a 'call to action' that might open a URL for example.",
    sourceUrl: "",
    siteUrl: "",
  },
  {
    id: 5,
    image: "core-component-library.png",
    name: "UI Component Library",
    tech: ["Vue 2", "HTML", "CSS"],
    description:
      "This was a component library to use with mulitple projects that were developed while working at Digital Seat Media. It was created to speed up development time and unify the UI design between all projects.",
    sourceUrl: "",
    siteUrl: "",
  },
  {
    id: 6,
    image: "L7-challenge.png",
    name: "L7 Challenge",
    tech: ["Vue 3", "HTML", "Tailwind CSS"],
    description:
      "This was a UI design challenge to upload a file and then have it display the data via a chart. The data is displayed based on the column that the user chooses and against Benford's law analysis.",
    sourceUrl: "https://github.com/rljones101/l7-challenge-2",
    siteUrl: "",
  },
  {
    id: 7,
    image: "react-quiz.png",
    name: "The React Quiz",
    tech: ["React", "HTML", "CSS"],
    description:
      'This is a small Quiz application that uses the "useReducer" hook to manage state. It will track answers choosen, show the correct answer. Allows the quiz to be completed with-in a certain amount of time. Shows the current question and the total amount. And will provide final feedback of well the user answered all the questions.',
    sourceUrl: "https://github.com/rljones101/react-quiz",
    siteUrl: "",
  },
  {
    id: 8,
    image: "classy-weather.png",
    name: "Classy Weather",
    tech: ["React", "HTML", "CSS"],
    description:
      "This is a simple weather application where the user can provide a location and get the weather for today and the rest of the week.",
    sourceUrl: "https://github.com/rljones101/react-classy-weather-poc",
    siteUrl: "",
  },
];

const featuredSite = {
  ...projects[0],
  featuredImages: ["videos.png", "reviewers.png", "stats.png", "profile.png"],
};

const initialState = {
  featuredProject: { ...featuredSite },
  index: 0,
  currImage: featuredSite.featuredImages[0],
};

function reducer(state, action) {
  const numImages = state.featuredProject.featuredImages.length;
  switch (action.type) {
    case "next": {
      const index = state.index < numImages - 1 ? state.index + 1 : 0;
      return {
        ...state,
        index,
        currImage: state.featuredProject.featuredImages.at(index),
      };
    }
    default:
      throw new Error("Action not defined");
  }
}

function App() {
  const [{ index, featuredProject, currImage }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch({ type: "next" });
    }, 10000);
    return () => clearTimeout(timerId);
  }, [index]);

  return (
    <div id="app" className="main-content-wrapper">
      <Header />
      <Main>
        <Nav />
        <AboutMeSection>
          <ProfileSummary />
          <ProfileImage />
        </AboutMeSection>
        <ProficientSkills />
        <FeaturedSiteSection
          image={currImage}
          name={featuredProject.name}
          description={featuredProject.description}
          sourceUrl={featuredProject.sourceUrl}
          siteUrl={featuredProject.siteUrl}
        />
        <PortfolioSection projects={projects} />
        <SkillsSection />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
