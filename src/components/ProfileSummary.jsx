import Button from "./Button";
import DocumentDownloadIcon from "./DocumentDownloadIcon";

export default function ProfileSummary() {
  function openUrl(link) {
    if (link) {
      window.open(link, "mozillaTab");
    }
  }

  return (
    <div className="order-2 md:order-1 flex-1">
      <p>Hello</p>
      <h2 className="font-bold text-3xl my-4 text-black">{`I'm Rick`}</h2>
      <p className="mb-4">
        I have excelled in the high tech and web development industry for the
        past several years. Through this time, I have learned how to manage and
        develop projects by asking and understanding “what is the business
        value?”, knowing the business roadmap and talking daily with fellow team
        members on how to achieve this in order for everyone to be successful!
        This approach helps me effectively manage, conceptualize, and execute on
        any given project.
      </p>
      <div className="flex items-center gap-2">
        <Button link="https://www.linkedin.com/in/rickljones/">
          Learn More
        </Button>
        <button
          className="flex items-center text-blue-500 font-bold border-black gap-2 hover:bg-gradient-to-b from-blue-500 to-blue-700 hover:bg-blue-600  hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all hover:text-white py-2 px-4 uppercase rounded-lg button-code"
          onClick={() => openUrl("./RickJonesResumeNC.pdf")}>
          <DocumentDownloadIcon /> Resume
        </button>
      </div>
    </div>
  );
}
