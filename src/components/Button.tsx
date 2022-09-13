type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface Props {
  children?: string | JSX.Element | (string | JSX.Element)[];
  type?: ButtonTypes;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: ()=> void;
}

const Button = ({
  type = 'button',
  hidden,
  disabled = false,
  children,
  onClick,
}: Props) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
