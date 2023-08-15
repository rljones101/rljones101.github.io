export default function CardTechItem({ tech }) {
  const techClass = (tech) => {
    if (tech === "Vue 2" || tech === "Vue 3") return "tech-vue";
    if (tech === "Tailwind CSS" || tech === "CSS") return "tech-tailwind";
    if (tech === "HTML") return "tech-html";
    if (tech === "Node") return "tech-node";
    if (tech === "Express") return "tech-express";
    if (tech === "MongoDB") return "tech-mongodb";
    if (tech === "React") return "tech-react";
    if (tech === "Redux") return "tech-redux";
  };

  return <span className={`tech ${techClass(tech)}`}>{tech}</span>;
}
