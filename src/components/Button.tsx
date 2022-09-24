type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface Props {
  children?: string | JSX.Element | (string | JSX.Element)[];
  type?: ButtonTypes;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: ()=> void;
  accessibleName: string;
}

const Button = ({
  type = 'button',
  hidden,
  disabled = false,
  children,
  onClick,
  accessibleName,
}: Props) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden} disabled={disabled} aria-label={accessibleName}>
      {children}
    </button>
  );
};

export default Button;
