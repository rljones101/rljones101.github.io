import GitHubButton from "./GitHubButton";
import Button from "./Button";
import CardTechItem from "./CardTechItem";
import Image from "./Image";

export default function Card({
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
          <Image
            img={img}
            title={title}
            className="transition-all group-hover:scale-110"
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
