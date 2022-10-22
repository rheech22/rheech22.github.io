import styled from 'styled-components';
import { preventUserDrag } from '../styles/modules';
import { white } from '../styles/themes';

interface Props {
  onClick: (value: string) => void;
  isSelected?: boolean;
  tag: string | null;
}

const Tag = ({ onClick, isSelected = false, tag }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();

    const { innerHTML: tag } = e.currentTarget;

    onClick(tag);
  };

  return (
    <Container onClick={handleClick} isSelected={isSelected}>
      {tag}
    </Container>
  );
};

export default Tag;

const Container = styled.li<{
  onClick: React.MouseEventHandler<HTMLLIElement>;
  isSelected?: boolean;
}>`
  ${preventUserDrag}

  margin-right: 1.5px;
  margin-bottom: 3px;
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2em;
  padding: 0 10px;
  min-height: fit-content;
  width: fit-content;
  max-width: 296px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.tagBgHovered : theme.lightBlue };
  color: ${({ theme, isSelected }) => isSelected ? white : theme.blue };
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
  
  @media (hover: hover) {
    &:hover {
      overflow-x: visible;
      text-overflow: unset;
      background-color: ${({ theme }) => theme.tagBgHovered};
      color: ${white};
    }
  }
`;
