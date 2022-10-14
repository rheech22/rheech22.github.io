type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement>['type']

interface Props {
  children?: string | JSX.Element | (string | JSX.Element)[];
  type?: ButtonTypes;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: ()=> void;
  accessibleName: string;
  tabIndex?: number;
}

const Button = ({
  type = 'button',
  hidden,
  disabled = false,
  children,
  onClick,
  accessibleName,
  tabIndex,
}: Props) => {
  return (
    <button type={type} onClick={onClick} hidden={hidden} disabled={disabled} aria-label={accessibleName} tabIndex={tabIndex}>
      {children}
    </button>
  );
};

export default Button;
