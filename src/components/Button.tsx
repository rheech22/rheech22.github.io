type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface ButtonProps {
  children?: string | JSX.Element;
  type?: ButtonTypes;
  hidden?: boolean;
  onClick?: ()=> void;
}

const Button = ({
  type = 'button',
  hidden,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden}>
      {children}
    </button>
  );
};

export default Button;
