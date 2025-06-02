import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [screenHeight, setScreenHeight] = useState<number>();

  const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
  }

  useEffect(() => {
      updateScreenWidth();

      window.addEventListener("resize", updateScreenWidth)

      return () => window.removeEventListener("resize", updateScreenWidth);
      
  }, [screenHeight, screenWidth])

  return {screenHeight, screenWidth}
};

export default useMediaQuery;
