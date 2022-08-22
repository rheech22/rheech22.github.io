type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface Props {
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
}: Props) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden}>
      {children}
    </button>
  );
};

export default Button;
