import "./App.css";
import { HashLink } from "react-router-hash-link";

// Source URLs
const OPINION_RATE_IT_LINK =
  "https://gitfront.io/r/rljones101/RVLYyHZkZ835/opinionrateit-site/";
const OPINION_RATE_IT_SITE = "https://dev.opinionrateit.com/";

const projects = [
  {
    id: 1,
    image: "videos.png",
    name: "OpinionRateIt",
    tech: ["Vue 3", "HTML", "Tailwind CSS", "Node", "Express", "MongoDB"],
    description:
      "Allows users to signup with their YouTube account. They can search for existing content from YouTube and add this to the application. It provides user feedback via metrics that other users enter and interact with. This was to created to give the reviewer insight on their reviement practice and adjust as needed.",
    sourceUrl: OPINION_RATE_IT_LINK,
    siteUrl: OPINION_RATE_IT_SITE,
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
];
// image, name, description, sourceUrl, siteUrl
const featuredSite = {
  image: "site-screens.png",
  name: "OpinionRateIt",
  description:
    "Allows users to signup with their YouTube account. They can search for existing content from YouTube and add this to the application. It provides user feedback via metrics that other users enter and interact with. This was to created to give the reviewer insight on their reviement practice and adjust as needed.",
  sourceUrl: OPINION_RATE_IT_LINK,
  siteUrl: OPINION_RATE_IT_SITE,
};

function App() {
  return (
    <div
      id="app"
      className="relative w-full md:max-w-7xl md:mx-auto p-4 md:p-8 background-gradient-color">
      <Header />
      <Main>
        <AboutMeSection>
          <ProfileSummary />
          <ProfileImage />
        </AboutMeSection>
        <FeaturedSiteSection
          image={featuredSite.image}
          name={featuredSite.name}
          description={featuredSite.description}
          sourceUrl={featuredSite.sourceUrl}
          siteUrl={featuredSite.siteUrl}
        />
        <PortfolioSection />
        <SkillsSection />
      </Main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className=" text-slate-100">
      <div className="flex flex-col p-12 text-center">
        <h1 className="text-center font-bold text-3xl uppercase">Rick Jones</h1>
        <p>Software Frontend Lead | Frontend UI Developer</p>
      </div>
    </header>
  );
}

function Main({ children }) {
  return (
    <main className="relative shadow-2xl shadow-black bg-white">
      {children}
    </main>
  );
}

function Footer() {
  return (
    <footer className="text-center p-8 text-white">
      © by Rick Jones. All rights reserved.
    </footer>
  );
}

function AboutMeSection({ children }) {
  return (
    <section id="AboutMe" className="hero-background">
      <Nav />
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
        {children}
      </div>
    </section>
  );
}

function ProfileSummary() {
  return (
    <div className="order-2 md:order-1 flex-1">
      <p>Hello</p>
      <h2 className="font-bold text-3xl my-4 text-black">{`I'm Rick`}</h2>
      <p className="mb-4">
        I have excelled in the high tech and web development industry for the
        past several years. Through this time, I have learned how to manage and
        develop projects by asking and understanding “what is the business
        value?”, knowing the business roadmap and talking daily with fellow team
        members on how to achieve this in order for everyone to be successful!
        This approach helps me effectively manage, conceptualize, and execute on
        any given project.
      </p>
      <div className="flex items-center gap-8">
        <Button link="https://www.linkedin.com/in/rickljones/">
          Learn More
        </Button>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="order-1 md:order-2 flex-1 flex flex-col items-center justify-center relative">
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
  );
}

function ProficientSkills() {
  return (
    <div className="flex flex-row bg-white text-slate-400 cursor-pointer text-xl w-full items-center justify-center gap-8 border border-slate-100  p-4">
      <p className="text-sm text-slate-300">Proficient in:</p>

      <div className="flex gap-4">
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
    </div>
  );
}

function FeaturedSiteSection({ image, name, description, sourceUrl, siteUrl }) {
  return (
    <section className="bg-slate-100">
      <ProficientSkills />

      <div className="overflow-hidden flex flex-col md:flex-row items-center gap-4 p-4 md:gap-8 md:p-8">
        <div className="md:flex-auto md:w-64 flex gap-4">
          <img src={image} alt="OpinonRateIt" />
        </div>
        <div className="md:flex-auto md:w-32">
          <h2 className="uppercase font-bold text-black">Featured</h2>
          <h3 className="text-2xl uppercase mb-4 text-blue-500">{name}</h3>
          <p className="mb-4">{description}</p>
          <div className="flex gap-2">
            <GitHubButton link={sourceUrl}>Source</GitHubButton>
            <Button link={siteUrl}>Website</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="Portfolio">
      <Title className="py-4 md:py-0 md:mt-8">Portfolio</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-8 ">
        {projects.map((project) => (
          <Card
            key={project.id}
            img={project.image}
            githubLink={project.sourceUrl}
            siteLink={project.siteUrl}
            title={project.name}
            technologySkills={project.tech}>
            {project.description}
          </Card>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="Skills" className="flex flex-col justify-center pt-4 md:p-0">
      <Title>Skills</Title>
      <div className="flex flex-col md:flex-row h-full items-stretch gap-8 z-10 p-4 md:p-8">
        <CardSkills
          title="languages"
          skills="JavaScript,TypeScript,PHP"
          icon="brands,square-js"
        />
        <CardSkills
          title="Frameworks"
          skills="Vue,React,AngularJS"
          icon="brands,vuejs"
        />
        <CardSkills
          title="Databases"
          skills="MongoDB,MySQL"
          customIcon="database"
        />
        <CardSkills
          title="Source Control"
          skills="Git,GitHub,JIRA"
          icon="brands,github"
        />
      </div>
    </section>
  );
}

function CardSkills({ customIcon, icon, title, skills }) {
  let iconArr = [];
  let type = "";
  let iconName = "";

  if (icon) {
    iconArr = icon.split(",");
    [type, iconName] = iconArr;
  }

  return (
    <div className="flex-1 bg-white shadow-lg shadow-gray-500 p-8 border-t-4 border-blue-500">
      <div>
        {type && iconName && (
          <i className={`fa-${type} fa-${iconName} text-3xl text-blue-500`}></i>
        )}
        {customIcon && (
          <CustomIcon
            icon={customIcon}
            className="text-3xl fill-blue-500 block mb-1"
          />
        )}
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

function Card({
  img,
  technologySkills = [],
  title,
  siteLink,
  githubLink,
  children,
}) {
  return (
    <div>
      <div className="group card-project flex flex-col items-center border border-slate-100">
        <div className="overflow-hidden m-4 md:m-8">
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
          <div className="flex-1 h-full">
            <div className="technologies">
              {technologySkills.map((tech) => (
                <CardTechItem tech={tech} key={tech} />
              ))}
            </div>
            {children}
          </div>
          <div className="actions flex gap-2">
            {githubLink && (
              <GitHubButton link={githubLink}>Source</GitHubButton>
            )}
            {siteLink && <Button link={siteLink}>Website</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTechItem({ tech }) {
  const techClass = (tech) => {
    if (tech === "Vue 2" || tech === "Vue 3") return "tech-vue";
    if (tech === "HTML") return "tech-html";
    if (tech === "Tailwind CSS" || tech === "CSS") return "tech-tailwind";
    if (tech === "Node") return "tech-node";
    if (tech === "Express") return "tech-express";
    if (tech === "MongoDB") return "tech-mongodb";
    if (tech === "React") return "tech-react";
  };

  return <span className={`tech ${techClass(tech)}`}>{tech}</span>;
}

function Nav() {
  function openUrl(url) {
    window.open(url, "mozillaTab");
  }

  return (
    <div className="flex w-full items-center justify-between p-4 md:p-8 pb-0">
      <div className="flex items-center gap-8 bg-white">
        <div className="bg-blue-500 rounded-full w-12 h-12 hidden md:flex items-center justify-center text-white font-bold text-2xl ">
          RJ
        </div>
        <NavButton to="/#AboutMe">About Me</NavButton>
        <NavButton to="/#Portfolio">Portfolio</NavButton>
        <NavButton to="/#Skills">Skills</NavButton>
      </div>
      <div className="flex gap-4 text-blue-500 md:text-white text-2xl">
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

function GitHubButton({ link, children }) {
  function openUrl() {
    if (link) {
      window.open(link, "mozillaTab");
    }
  }
  return (
    <button
      className="bg-gradient-to-b from-gray-500 to-gray-700 hover:bg-gray-600 hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all text-white py-2 px-4 uppercase rounded-lg button-code"
      onClick={() => openUrl()}>
      <i className=" hover:text-slate-200 fa-brands fa-github mr-1" />
      {children}
    </button>
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
      className="bg-gradient-to-b from-blue-500 to-blue-700 hover:bg-blue-600 hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all text-white py-2 px-4 uppercase rounded-lg button-code"
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

function CustomIcon({ icon, className }) {
  return (
    <span className={className}>
      {icon === "database" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512">
          <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
        </svg>
      )}
    </span>
  );
}

export default App;
