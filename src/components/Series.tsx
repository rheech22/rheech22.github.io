import { navigate } from 'gatsby';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import { bgHovered } from '../styles/themes';
import { border, flex } from '../styles/mixins';
import { preventUserDrag } from '../styles/modules';

import { useContext } from '../store/context';

const Series = () => {
  const { posts, series: selectedSeries } = useContext();

  const series = [ ...new Set(posts.map(({ node: { frontmatter: { series } } }) => series)) ].filter(Boolean);

  const searchBySeries = (series?: string | null) => {
    if (!series) return;

    if (series === selectedSeries) return navigate('/');

    navigate(`/search/?series=${encodeURI(series)}`, { state: { series } });
  };

  if (!series.length) return null;

  return (
    <Container>
      <h3>Series</h3>
      <ul>
        {series.map((title, i)=> <List key={i} onClick={()=> searchBySeries(title)} isSelected={title === selectedSeries}>{title}</List>)}
      </ul>
    </Container>
  );
};

export default Series;

const Container = styled.div`
  display: none;
  padding-left: 20px;
  padding-bottom: 40px;
  
  @media ${device.widerThanLaptopS} {
    display: block;
  }

  & > h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

const List = styled.li<{isSelected: boolean}>`
  ${preventUserDrag};
  ${flex({ alignItems: 'center' })};
  ${border.left};
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 8px 10px;
  max-width: 100%;  
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.seriesBg : 'inherit'};
  color: ${({ theme, isSelected }) => isSelected ? theme.series : 'inherit'};
  border-color: ${({ theme, isSelected }) => isSelected ? theme.series : ''};
  transition: all .5s;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme, isSelected }) => isSelected ? theme.seriesBg : bgHovered};
    }
  }
`;
