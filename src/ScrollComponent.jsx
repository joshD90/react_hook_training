import { useScroll } from "./utils/useScroll";

const ScrollComponent = () => {
  const [scrollPos, hasHit] = useScroll(300);
  return (
    <div
      style={{
        height: "300vh",
        background: "linear-gradient(white,black)",

        width: "100vw",
        position: "relative",
      }}
    >
      {hasHit && (
        <div
          style={{
            backgroundColor: "blue",
            height: "20px",
            width: "20px",
            position: "absolute",
            top: 600,
            left: "50%",
          }}
        ></div>
      )}
    </div>
  );
};

export default ScrollComponent;
