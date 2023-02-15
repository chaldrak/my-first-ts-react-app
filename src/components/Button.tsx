type ButtonProps = {
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleClick} style={{ marginRight: "10px" }}>
      Click
    </button>
  );
};

export default Button;
