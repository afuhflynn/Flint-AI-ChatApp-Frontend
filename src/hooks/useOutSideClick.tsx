import { MutableRefObject, useEffect, useState } from "react";

const useOutSideClick = (
  target: MutableRefObject<HTMLDivElement | null | HTMLElement>
): boolean => {
  const [isPopup, setIsPopup] = useState(true);

  useEffect(() => {
    const handleHidePopup = (event: MouseEvent) => {
      // Check if the element that is being clicked is our ref
      if (
        target &&
        target.current &&
        !target.current.contains(event.target as Node)
      ) {
        setIsPopup(false);
      } else {
        return;
      }
    };
    document.addEventListener("mousedown", handleHidePopup);
    //Clean up
    return () => {
      document.addEventListener("mousedown", handleHidePopup);
    };
  });
  return isPopup;
};

export default useOutSideClick;
