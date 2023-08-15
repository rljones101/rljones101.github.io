import { createContext } from "react";
import { useFeaturedImages } from "../useFeaturedImages";
import { useContext } from "react";

const ProjectsContext = createContext();

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
    sourceUrl: "",
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
      'This is a small Quiz application that uses the "useReducer" hook to manage state. It tracks answers choosen and will show the correct answer. The UI contains a timer that will end the quiz if not completed in a certain amount of time. It also provides the current question and the total amount of questions that are being asked. When the user has completed the quiz, it will give the user a score based on the correct answers that were given.',
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
  {
    id: 9,
    image: "fast-react-pizza-co.png",
    name: "Fast React Pizza Co.",
    tech: ["React", "HTML", "Tailwind CSS", "Redux"],
    description:
      "This is a simple project using React, Tailwind CSS and Redux Toolkit. It simulates the idea of users purchasing pizzas, managing their purchases through the menu or via the cart. Setting a priority and showing the aggregated cost.",
    sourceUrl: "https://github.com/rljones101/react-fast-pizza-co",
    siteUrl: "",
  },
];

const featuredProject = {
  ...projects[0],
  featuredImages: ["videos.png", "reviewers.png", "stats.png", "profile.png"],
};

const initialState = {
  featuredImages: featuredProject.featuredImages,
};

function ProjectsProvider({ children }) {
  const { image } = useFeaturedImages(initialState);

  return (
    <ProjectsContext.Provider value={{ projects, featuredProject, image }}>
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects() {
  const context = useContext(ProjectsContext);
  if (context === undefined)
    throw new Error(
      "ProjectContexts was accessed outside the ProjectsProvider."
    );
  return context;
}

export { ProjectsProvider, useProjects };
