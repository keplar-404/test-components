import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RefObject } from "react";

interface CropOutMediaRectangleProps {
  target: RefObject<HTMLDivElement>;
  boxInitialWidth: number;
  boxAnimationWidth: number;
  imageSrc: string;
  imageSize: number;
}

export default function CropOutMediaRactangale({
  target,
  boxInitialWidth,
  boxAnimationWidth,
  imageSrc,
  imageSize,
}: CropOutMediaRectangleProps) {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["0 1", "0 0.4"],
  });

  const boxSize = useTransform(
    scrollYProgress,
    [0, 1],
    [boxInitialWidth, boxAnimationWidth]
  );
  const width = useSpring(boxSize, {
    stiffness: 200,
    restDelta: 0.001,
    damping: 30,
  });

  return (
    <motion.div
      className=" bg-red-400 rounded-2xl mt-5"
      transition={{ type: "spring" }}
      style={{
        width: width,
        height: 400,

        backgroundImage: `url(${imageSrc})`,
        backgroundSize: imageSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></motion.div>
  );
}
