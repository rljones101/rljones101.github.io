export default function Button({ link, onClick, children }) {
  function openUrl() {
    if (link) {
      window.open(link, "mozillaTab");
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className="font-bold bg-gradient-to-b from-blue-500 to-blue-700 hover:bg-blue-600 hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all text-white py-2 px-4 uppercase rounded-lg button-code"
      onClick={() => openUrl()}>
      {children}
    </button>
  );
}
