import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  selector: string;
  children: React.ReactNode;
};

export default function Portal({ children, selector }: Props) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
