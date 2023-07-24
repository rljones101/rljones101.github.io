import Title from "./Title";
import CardSkills from "./CardSkills";

export default function SkillsSection() {
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
