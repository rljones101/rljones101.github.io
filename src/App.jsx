import "./App.css";
import { HashLink } from "react-router-hash-link";

const OPINION_RATE_IT_LINK =
  "https://gitfront.io/r/rljones101/RVLYyHZkZ835/opinionrateit-site/";
const CAT_FACTS = "https://github.com/rljones101/cat-facts";
const DS_METRICS_PORTAL =
  "https://gitfront.io/r/rljones101/jXWsu2S5Aek9/ds-metrics-portal/";
const APP_EDITOR = "";
const UI_COMPONENT_LIBRARY = "";
const L7_CHALLENGE = "https://github.com/rljones101/l7-challenge-2";

function App() {
  return (
    <div
      id="app"
      className="relative max-w-7xl mx-auto p-8 background-gradient-color">
      <header className=" text-slate-100">
        <div className="flex flex-col p-12 text-center">
          <h1 className="text-center font-bold text-3xl uppercase">
            Rick Jones
          </h1>
          <p>Software Frontend Lead | Frontend UI Developer</p>
        </div>
      </header>
      <main className="relative shadow-2xl shadow-black bg-white">
        <AboutMeSection />
        <FeaturedSiteSection />
        <PortfolioSection />
        <SkillsSection />
      </main>
      <footer className="text-center p-8 text-white">
        © by Rick Jones. All rights reserved.
      </footer>
    </div>
  );
}

function AboutMeSection() {
  return (
    <section id="AboutMe" className="hero-background">
      <Nav />
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="flex-1">
          <p>Hello</p>
          <h2 className="font-bold text-3xl my-4 text-black">I'm Rick</h2>
          <p className="mb-4">
            I have excelled in the high tech and web development industry for
            the past several years. Through this time, I have learned how to
            manage and develop projects by asking and understanding “what is the
            business value?”, knowing the business roadmap and talking daily
            with fellow team members on how to achieve this in order for
            everyone to be successful! This approach helps me effectively
            manage, conceptualize, and execute on any given project.
          </p>
          <div className="flex items-center gap-8">
            <Button link="https://www.linkedin.com/in/rickljones/">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <img
            alt="Rick"
            src="profile-pic.jpg"
            className="relative rounded-full  z-30 border-4 border-white"
            style={{
              objectFit: "cover",
              width: "300px",
              height: "300px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ProficientSkills() {
  return (
    <div className="flex bg-white text-slate-300 cursor-pointer text-xl w-full items-center justify-center gap-8 border border-slate-100  p-4">
      <p className="text-sm text-slate-300">Proficient in:</p>

      <span className=" hover:text-green-700 font-bold">
        <i className="fa-brands fa-vuejs"></i> Vue
      </span>
      <span className=" hover:text-teal-200">
        <i className="fa-brands fa-react"></i> React
      </span>
      <span className=" hover:text-red-500">
        <i className="fa-brands fa-angular"></i> Angular
      </span>
    </div>
  );
}

function FeaturedSiteSection() {
  return (
    <section className="bg-slate-100">
      <ProficientSkills />
      <div className="featured flex flex-col space-y-8 pt-8 pb-8 ">
        <div className="overflow-hidden flex items-center gap-8 p-8">
          <div className="flex-auto w-64 flex gap-4">
            <div>
              <img src="site-screens.png" alt="OpinonRateIt" />
            </div>
          </div>
          <div className="flex-auto w-32">
            <h2 className="uppercase font-bold mt-8 text-black">Featured</h2>
            <h3 className="text-2xl uppercase mb-4 text-blue-500">
              OpinionRateIt
            </h3>
            <p className="mb-4">
              Allows users to signup with their YouTube account. They can search
              for existing content from YouTube and add this to the application.
              It provides user feedback via metrics that other users enter and
              interact with. This was to created to give the reviewer insight on
              their reviement practice and adjust as needed.
            </p>
            <Button link={OPINION_RATE_IT_LINK}>Code</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="Portfolio">
      <Title className="mt-8">Portfolio</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 ">
        <Card
          img="videos.png"
          link={OPINION_RATE_IT_LINK}
          title="OpinonRateIt"
          tech="Vue 3,HTML,Tailwind CSS,Node,Express,MongoDB">
          Allows users to signup with their YouTube account. They can search for
          existing content from YouTube and add this to the application. It
          provides user feedback via metrics that other users enter and interact
          with. This was to created to give the reviewer insight on their
          reviement practice and adjust as needed.
        </Card>
        <Card
          img="cat-facts.png"
          link={CAT_FACTS}
          title="Cat Facts"
          tech="React,HTML,Tailwind CSS">
          This is a fun approval system board that is similar to Jira. This was
          created in order to learn more about React development. It allows
          users to create quotes, approve or deny them. It also allows the user
          to sort each column by date.
        </Card>
        <Card
          img="ds-client-portal.png"
          link={DS_METRICS_PORTAL}
          title="Client Portal"
          tech="Vue 2,HTML,Tailwind CSS">
          This is a client portal that was created to allow users to login after
          events and view specific metrics for live events. Collect analysis
          based on a date range. Add and edit events. And also control the QR
          codes that are used during the events.
        </Card>
        <Card
          img="app-editor.png"
          link={APP_EDITOR}
          title="App Editor"
          tech="Vue 2,HTML,Tailwind CSS">
          An editor that gave that provided users a way to create the live app
          experience at a given event. It allowed them to sort the content,
          update images, context and a "call to action" that might open a URL
          for example.
        </Card>
        <Card
          img="core-component-library.png"
          link={UI_COMPONENT_LIBRARY}
          title="UI Component Library"
          tech="Vue 2,HTML,CSS">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quasi
          mollitia eum itaque quam magni quas, odit voluptatum, omnis blanditiis
          labore beatae nobis ad dolorum repellat eveniet? Quis, est debitis.
        </Card>
        <Card
          img="L7-challenge.png"
          link={L7_CHALLENGE}
          title="L7 Challenge"
          tech="Vue 3,HTML,Tailwind CSS">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quasi
          mollitia eum itaque quam magni quas, odit voluptatum, omnis blanditiis
          labore beatae nobis ad dolorum repellat eveniet? Quis, est debitis.
        </Card>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="Skills" className="flex flex-col justify-center">
      <Title>Skills</Title>
      <div className="flex h-full items-stretch gap-8 z-10 p-8">
        <CardSkills title="languages" skills="JavaScript,TypeScript,PHP" />
        <CardSkills title="Frameworks" skills="Vue,React,AngularJS" />
        <CardSkills title="Databases" skills="MongoDB,MySQL" />
        <CardSkills title="Source Control" skills="Git,GitHub,JIRA" />
      </div>
    </section>
  );
}

function CardSkills({ title, skills }) {
  return (
    <div className="flex-1 bg-white shadow-lg shadow-gray-500 p-8 border-t-4 border-black">
      <div>
        <h3 className="font-bold text-black text-lg">{title}</h3>
      </div>
      <ul>
        {skills.split(",").map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Card({ img, tech, title, link, children }) {
  let technologySkills = [];

  if (tech) {
    technologySkills = tech.split(",");
  }

  const techClass = (tech) => {
    if (tech === "Vue 2" || tech === "Vue 3") return "tech-vue";
    if (tech === "HTML") return "tech-html";
    if (tech === "Tailwind CSS" || tech === "CSS") return "tech-tailwind";
    if (tech === "Node") return "tech-node";
    if (tech === "Express") return "tech-express";
    if (tech === "MongoDB") return "tech-mongodb";
    if (tech === "React") return "tech-react";
  };

  return (
    <div>
      <div className="group card-project flex flex-col items-center border border-slate-100">
        <div className="overflow-hidden m-8">
          <img
            src={img}
            alt={title}
            style={{
              objectFit: "cover",
              aspectRatio: 1 / 1,
            }}
            className=" transition-all group-hover:scale-110"
          />
        </div>
        <div className="card-content">
          <h2 className=" ">{title}</h2>
          <div className="actions">
            <Button link={link}>Code</Button>
          </div>
          <div className="flex-1 h-full">
            {children}
            <div className="technologies">
              {technologySkills.map((techItem) => (
                <span key={techItem} className={`tech ${techClass(techItem)}`}>
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  function openUrl(url) {
    window.open(url, "mozillaTab");
  }

  return (
    <div className="flex w-full items-center justify-between self-start p-8 pb-0">
      <div className="flex items-center gap-8 text-purple-950 bg-white">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-2xl ">
          RJ
        </div>
        <NavButton to="/#AboutMe">About Me</NavButton>
        <NavButton to="/#Portfolio">Portfolio</NavButton>
        <NavButton to="/#Skills">Skills</NavButton>
      </div>
      <div className="flex gap-4 text-white text-2xl">
        <button
          onClick={() => openUrl("https://www.linkedin.com/in/rickljones/")}>
          <i className=" hover:text-slate-200 fa-brands fa-linkedin" />
        </button>
        <button onClick={() => openUrl("https://github.com/rljones101")}>
          <i className=" hover:text-slate-200 fa-brands fa-github" />
        </button>
      </div>
    </div>
  );
}

function NavButton({ to, children }) {
  return (
    <div className="relative group">
      <HashLink
        smooth
        to={to}
        className="flex text-black transition ease-out hover:ease-in duration-300 pt-2 pb-2 font-bold uppercase">
        {children}
      </HashLink>
      <span className="absolute -bottom-1 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
    </div>
  );
}

function Button({ link, onClick, children }) {
  function openUrl() {
    if (link) {
      window.open(link, "mozillaTab");
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600  text-white py-2 px-4 uppercase rounded-lg"
      onClick={() => openUrl()}>
      {children}
    </button>
  );
}

function Title({ className, children }) {
  return (
    <h2
      className={`text-center uppercase font-bold text-2xl text-black ${className}`}>
      {children}
    </h2>
  );
}

export default App;
