export default function ProficientSkills() {
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
