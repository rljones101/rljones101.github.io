function Image({ img, title, className }) {
  return (
    <img
      src={img}
      alt={title}
      style={{
        objectFit: "cover",
        objectPosition: "top",
        height: "100%",
        width: "100%",
        aspectRatio: 4 / 3,
      }}
      className={className}
    />
  );
}

export default Image;
