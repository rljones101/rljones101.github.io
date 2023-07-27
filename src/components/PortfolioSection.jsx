import Title from "./Title";
import Card from "./Card";
import { useProjects } from "../context/ProjectsProvider";

export default function PortfolioSection() {
  const { projects } = useProjects();
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
