import NavButton from "./NavButton";

export default function Nav() {
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
