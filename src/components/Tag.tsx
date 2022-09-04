import styled from "styled-components";
import { preventUserDrag } from "../styles/mixins";
import { white } from "../styles/themes";

interface Props {
  onClick: (value: string) => void;
  isSelected: boolean;
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
  isSelected: boolean;
}

const Container = styled.li<Container>`
  ${preventUserDrag}

  background-color: ${({ theme, isSelected }) => isSelected ? theme.tagBgHovered : theme.lightBlue } !important;
  color: ${({ theme, isSelected }) => isSelected ? white : theme.blue } !important;
`;
