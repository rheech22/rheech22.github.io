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

  margin-right: 1.5px;
  margin-bottom: 3px;
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2em;
  padding: 0 10px;
  min-height: fit-content;
  width: fit-content;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.tagBgHovered : theme.lightBlue };
  color: ${({ theme, isSelected }) => isSelected ? white : theme.blue };
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.tagBgHovered};
    color: ${white};
  }
`;
