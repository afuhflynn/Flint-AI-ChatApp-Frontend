import { useEffect } from "react";

const useScrollIntoView = (ref: HTMLSpanElement | null) => {
  useEffect(() => {
    if (ref) {
      ref.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [ref]);
};

export default useScrollIntoView;
