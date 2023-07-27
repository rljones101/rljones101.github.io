import Button from "./Button";
import GitHubButton from "./GitHubButton";
import Transition from "./Transition";
import Image from "./Image";
import { useProjects } from "../context/ProjectsProvider";

export default function FeaturedSiteSection() {
  const { image, featuredProject } = useProjects();
  return (
    <section className="bg-blue-50 flex justify-center">
      <div className="overflow-hidden transition-all flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:gap-8 md:p-8">
        <Transition
          variable={image}
          name="fade"
          className="md:flex-auto md:w-64 flex gap-4 transition-all">
          <Image
            img={image}
            title={featuredProject.name}
            className="shadow-lg shadow-gray-300"
          />
        </Transition>
        <div className="md:flex-auto md:w-32">
          <h2 className="uppercase font-bold text-black">Featured</h2>
          <h3 className="text-2xl uppercase mb-4 text-blue-500">
            {featuredProject.name}
          </h3>
          <p className="mb-4">{featuredProject.description}</p>
          <div className="flex gap-2">
            {featuredProject.sourceUrl && (
              <GitHubButton link={featuredProject.sourceUrl}>
                Source
              </GitHubButton>
            )}
            {featuredProject.siteUrl && (
              <Button link={featuredProject.siteUrl}>Website</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
