export default function Title({ className, children }) {
  return (
    <h2
      className={`text-center uppercase font-bold text-2xl text-black ${className}`}>
      {children}
    </h2>
  );
}
