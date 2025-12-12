import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useInfiniteGradient = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  const style = {
    background: "linear-gradient(90deg, #6366f1, #4f46e5, #818cf8, #3730a3)", // Indigo-600/700 mix
    backgroundSize: "300% 300%",
    boxShadow:
      "0 0 30px 10px rgba(99,102,241,0.5), 0 0 40px 15px rgba(79,70,229,0.4)",
    borderRadius: "16px",
    padding: "4px", // outer border thickness
  };

  return { controls, style };
};

export default useInfiniteGradient;
