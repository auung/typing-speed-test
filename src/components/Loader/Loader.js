import StyledLoader from "./Loader.styles";

function Loader({ className }) {
  return (
    <div className={className}>
      <StyledLoader
        margin={-7}
        size={10}
        speedMultiplier={0.8}
      />
    </div>
  );
}

export default Loader;