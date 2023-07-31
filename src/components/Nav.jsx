import NavButton from "./NavButton";

export default function Nav() {
  function openUrl(url) {
    window.open(url, "mozillaTab");
  }

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between p-4 md:px-8 md:py-4 sticky top-0 bg-blue-50 z-50 shadow-lg ">
      <div className="flex items-center gap-8">
        <div className="bg-blue-500 rounded-full w-12 h-12 hidden md:flex items-center justify-center text-white font-bold text-2xl ">
          RJ
        </div>
        <NavButton to="/#AboutMe">About Me</NavButton>
        <NavButton to="/#Portfolio">Portfolio</NavButton>
        <NavButton to="/#Skills">Skills</NavButton>
        <NavButton to="/#Contact">Contact</NavButton>
      </div>
      <div className="flex gap-4 order-first md:order-last text-blue-500  text-2xl">
        <button
          onClick={() => openUrl("https://www.linkedin.com/in/rickljones/")}>
          <i className=" hover:text-blue-400 fa-brands fa-linkedin" />
        </button>
        <button onClick={() => openUrl("https://github.com/rljones101")}>
          <i className=" hover:text-blue-400 fa-brands fa-github" />
        </button>
      </div>
    </div>
  );
}
