export default function GitHubButton({ link, children }) {
  function openUrl() {
    if (link) {
      window.open(link, "mozillaTab");
    }
  }
  return (
    <button
      className="font-bold bg-gradient-to-b from-gray-500 to-gray-700 hover:bg-gray-600 hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all text-white py-2 px-4 uppercase rounded-lg button-code"
      onClick={() => openUrl()}>
      <i className=" hover:text-slate-200 fa-brands fa-github mr-1" />
      {children}
    </button>
  );
}
