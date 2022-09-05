import styled from "styled-components";
import { preventUserDrag } from "../styles/mixins";
import { white } from "../styles/themes";

interface Props {
  onClick: (value: string) => void;
  isSelected?: boolean;
  tag: string | null;
}

const Tag = ({ onClick, isSelected, tag }: Props) => {
  const handleClick = ({ currentTarget: { innerHTML } }: React.MouseEvent<HTMLLIElement>) => {
    onClick(innerHTML);
  };

  return (
    <Container onClick={handleClick} isSelected={isSelected}>
      {tag}
    </Container>
  );
};

export default Tag;

interface Container {
  onClick: React.MouseEventHandler<HTMLLIElement>;
  isSelected?: boolean;
}

const Container = styled.li<Container>`
  ${preventUserDrag}

  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  border-radius: 2em;
  border: 1px solid rgba(0,0,0,0);
  margin-right: 1.5px;
  margin-bottom: 3px;
  padding: 0 10px;
  width: fit-content;
  min-height: fit-content;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.tagBgHovered : theme.lightBlue };
  color: ${({ theme, isSelected }) => isSelected ? white : theme.blue };
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.tagBgHovered};
    color: ${white};
  }
`;
