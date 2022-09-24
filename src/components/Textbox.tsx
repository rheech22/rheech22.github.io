import styled from 'styled-components';

interface Props {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
}

const Textbox = ({
  name,
  value,
  onChange,
  placeholder,
  id,
  maxLength,
  autoFocus,
  disabled,
}: Props) => {
  return (
    <Input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={({ target: { value } })=> onChange?.(value)}
      placeholder={placeholder}
      maxLength={maxLength}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
};

export default Textbox;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;
