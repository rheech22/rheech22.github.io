import styled from 'styled-components';

interface Props {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Textbox = ({
  id,
  name,
  value,
  onChange,
  placeholder,
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
