import "./styles.css";
import IMAGE from "./computer.jpg";
import LOGO from "./logo.svg";

export const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Image</p>
      <img src={IMAGE} alt="test image" />
      <p>SVG</p>
      <img src={LOGO} alt="test logo" width="100" />
    </>
  );
};
