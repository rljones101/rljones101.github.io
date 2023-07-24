export default function ProfileImage() {
  return (
    <div className="order-1 md:order-2 flex-1 flex flex-col items-center justify-center relative">
      <img
        alt="Rick"
        src="profile-pic-2.png"
        className="relative rounded-full  z-30 border-4 border-white"
        style={{
          objectFit: "cover",
          width: "300px",
          height: "300px",
        }}
      />
    </div>
  );
}
