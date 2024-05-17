export const wrap = (min: any, max: any, v: any) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

export const TopMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-black text-white p-1 overflow-hidden font-light text-sm">
      <ParallaxText baseVelocity={-1.5}>{children}</ParallaxText>
    </div>
  );
};

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-[1440px] text-slate-900 overflow-hidden capitalize font-medium font-newyork text-5xl max-lg:text-[120px]">
      <ParallaxText baseVelocity={-1.5}>{children}</ParallaxText>
    </div>
  );
}
export default Marquee;
// @ts-ignore
export function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
        <span className="flex justify-between">{children} </span>
      </motion.div>
    </div>
  );
}

// WE BELIEVE IN PEOPLE * UNTIL THEY BELIEVE * IN THEMSELVES AGAIN *
