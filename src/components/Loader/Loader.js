import StyledLoader from "./Loader.styles";

function Loader({ className }) {
  return (
    <div className={className}>
      <StyledLoader
        margin={-7}
        size={"0.75rem"}
        speedMultiplier={0.8}
      />
    </div>
  );
}

export default Loader;