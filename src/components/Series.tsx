import { navigate } from 'gatsby';
import styled from 'styled-components';
import { useContext, useDispatch } from '../store/context';
import { device } from '../styles/breakpoints';
import { border, flex } from '../styles/mixins';

const Series = () => {
  const dispatch = useDispatch();

  const { posts, series: selectedSeries } = useContext();

  const series = [ ...new Set(posts?.map(({ node }) => node.frontmatter?.series)) ].filter(Boolean);

  const searchBySeries = (series?: string | null) => {
    if (!series) return;

    dispatch({ type: 'searchBySeries', payload: { series } });

    const param = new URLSearchParams(location.search).get('series');

    if (param === series) return navigate('/search');

    navigate(`/search?series=${encodeURI(series)}`);
  };

  if (!series.length) return null;

  return (
    <Container>
      <h3>SERIES</h3>
      <ul>
        {series.map((title, i)=> <List key={i} onClick={()=> searchBySeries(title)} isSelected={title === selectedSeries}>{title}</List>)}
      </ul>
    </Container>
  );
};

export default Series;

const Container = styled.div`
  display: none;
  margin-top: 36px;
  padding-left: 10px;
  
  @media ${device.widerThanLaptop} {
    display: block;
  }

  & > h3 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

const List = styled.li<{isSelected: boolean}>`
  ${flex({ alignItems: 'center' })}
  ${border.left};
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 8px 10px;
  max-width: 100%;  
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ theme, isSelected }) => isSelected ? theme.lightOrange : 'inherit'};
  color: ${({ theme, isSelected }) => isSelected ? theme.orange : 'inherit'};
  border-color: ${({ theme, isSelected }) => isSelected ? theme.orange : 'inherit'};
  
  &:hover {
    color: ${({ theme }) => theme.orange };
  }
`;
