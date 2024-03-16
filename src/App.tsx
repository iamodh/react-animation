import styled from "styled-components";
import { motion, spring } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
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

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: { borderRadius: "100px", scale: 1 },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 1 } },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        whileDrag="drag"
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default App;
