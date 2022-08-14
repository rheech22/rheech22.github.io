type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface ButtonProps {
  innerText?: string;
  type?: ButtonTypes;
  hidden?: boolean;
  onClick?: ()=> void;
}

const Button = ({
  type = 'button',
  hidden,
  innerText,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden}>
      {innerText}
    </button>
  );
};

export default Button;
