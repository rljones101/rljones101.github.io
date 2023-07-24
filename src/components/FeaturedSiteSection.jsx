import Button from "./Button";
import GitHubButton from "./GitHubButton";
import Transition from "./Transition";

export default function FeaturedSiteSection({
  image,
  name,
  description,
  sourceUrl,
  siteUrl,
}) {
  return (
    <section className="bg-slate-100 flex justify-center">
      <div className="overflow-hidden transition-all flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:gap-8 md:p-8">
        <Transition
          variable={image}
          name="fade"
          className="md:flex-auto md:w-64 flex gap-4 transition-all">
          <img
            src={image}
            alt={name}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              height: "435px",
              aspectRatio: "2/1",
            }}
            className="shadow-lg shadow-gray-300 "
          />
        </Transition>
        <div className="md:flex-auto md:w-32">
          <h2 className="uppercase font-bold text-black">Featured</h2>
          <h3 className="text-2xl uppercase mb-4 text-blue-500">{name}</h3>
          <p className="mb-4">{description}</p>
          <div className="flex gap-2">
            {sourceUrl && <GitHubButton link={sourceUrl}>Source</GitHubButton>}
            {siteUrl && <Button link={siteUrl}>Website</Button>}
          </div>
        </div>
      </div>
    </section>
  );
}
