import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const boxVariants = {};

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-400, 400],
    [
      "linear-gradient(135deg,rgb(67, 191, 113),rgb(200, 236, 223)",
      "linear-gradient(135deg,rgb(56, 14, 206),rgb(199, 186, 252)",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, scale }}
        drag="x"
        dragSnapToOrigin
        variants={boxVariants}
      />
    </Wrapper>
  );
}

export default App;
