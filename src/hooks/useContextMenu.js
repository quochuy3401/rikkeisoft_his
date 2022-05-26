import { useEffect, useCallback, useState } from "react";

const useContextMenu = () => {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleContextMenu = (event) => {
    event.preventDefault();
    event.pageX + 250 > window.innerWidth ?  setX(`${window.innerWidth - 270}px`) : setX(event.pageX);
    event.pageY + 310 > window.innerHeight ?  setY(`${window.innerHeight - 330}px`) : setY(event.pageY);
    setShow(true);
  }

  const handleClick = () => {
    show && setShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { x,y, show };
};

export default useContextMenu;
