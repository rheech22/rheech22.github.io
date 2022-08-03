import styled from "styled-components";

interface TextboxProps {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  id?: string;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
}

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Textbox = ({
  name,
  value,
  onChange,
  placeholder,
  id,
  maxLength,
  autoFocus,
  disabled,
}: TextboxProps) => {
  return (
    <Input
      type='text'
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