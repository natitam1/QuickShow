const BlurCircle = ({
  right = "auto",
  left = "auto",
  bottom = "auto",
  top = "auto",
}) => {
  return (
    <div
      className="aspect-square absolute rounded-full w-58 h-58 -z-50 bg-primary/30 blur-3xl"
      style={{ top: top, left: left, right: right, bottom: bottom }}
    ></div>
  );
};

export default BlurCircle;
