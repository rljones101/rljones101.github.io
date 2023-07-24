import Nav from "./Nav";

export default function AboutMeSection({ children }) {
  return (
    <section id="AboutMe" className="hero-background">
      <Nav />
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
        {children}
      </div>
    </section>
  );
}
