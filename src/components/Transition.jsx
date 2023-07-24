import { useState, useEffect } from "react";

export default function Transition({ variable, name, className, children }) {
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChanged(true);
    const timerId = setTimeout(() => {
      setChanged(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [variable]);

  return (
    <div
      className={
        className + (changed ? ` ${name}-animation` : ` ${name}-done`)
      }>
      {children}
    </div>
  );
}
