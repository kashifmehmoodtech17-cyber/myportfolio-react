import { motion } from "framer-motion";

const InfiniteBorderCard = ({ imageUrl }) => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-[300px] h-[280px] z-10"
    >
      {/* Animated Border */}
      <motion.div
        className="absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-xl z-[-1]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(90deg, #ff0057, #fffd87, #00f7ff, #ff0057)",
          backgroundSize: "300% 300%",
        }}
      />

      {/* Card Content */}
      <div className="bg-slate-900 text-white w-[295px] h-[275px] rounded-lg flex justify-center items-center">
        <img src={imageUrl} alt="logo" className="w-[100px]" />
      </div>
    </motion.div>
  );
};

export default InfiniteBorderCard;
