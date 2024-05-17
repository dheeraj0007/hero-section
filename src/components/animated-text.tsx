import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.div
      key={text}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ type: "spring", stiffness: 80, duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
