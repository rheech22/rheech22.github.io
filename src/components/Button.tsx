interface ButtonProps {
  innerText?: string;
  onClick?: ()=> void;
}

const Button = ({
  innerText,
  onClick,
}: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
