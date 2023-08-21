import { useContext } from '../store/context';
import { Wikis } from '../store/types';
import { has } from '../utils';

interface Params {
  filter?: string;
  keyword?: string;
}

interface Filter extends Params {
  wikis?: Wikis;
}

const filterWikis = ({ wikis, keyword, filter }: Filter) => {
  if (keyword) {
    return wikis?.filter(
      ({
        node: {
          fields: { title },
          html
        }
      }) => {
        const hasTitle = has(title)(keyword);

        const hasContent = has(html)(keyword);

        const all = hasTitle || hasContent;

        return filter === 'all' ? all : filter === 'title' ? hasTitle : hasContent;
      }
    );
  }

  return wikis;
};

const useFilter = ({ filter, keyword }: Params) => {
  const { wikis } = useContext();

  const filteredWikis = filterWikis({
    wikis,
    filter,
    keyword
  });

  return filteredWikis;
};

export default useFilter;
