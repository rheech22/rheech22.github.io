import { useContext } from '../store/context';
import { Wikis } from '../store/types';

interface Params {
  searchFilter?: string;
  searchKeyword?: string;
}

interface Filter extends Params {
  wikis: Wikis;
}

const filter = ({ wikis, searchKeyword, searchFilter }: Filter) => {
  if (searchKeyword) {
    return wikis.filter(
      ({
        node: {
          fields: { title },
          html
        }
      }) => {
        const hasTitle = title.toLowerCase().includes(searchKeyword.toLowerCase());

        const hasContent = html?.toLowerCase().includes(searchKeyword.toLowerCase());

        return searchFilter === 'title' ? hasTitle : hasContent;
      }
    );
  }

  return wikis;
};

const useFilteredWikis = ({ searchFilter, searchKeyword }: Params) => {
  const { wikis } = useContext();

  const filteredWikis = filter({
    wikis,
    searchFilter,
    searchKeyword
  });

  return filteredWikis;
};

export default useFilteredWikis;
