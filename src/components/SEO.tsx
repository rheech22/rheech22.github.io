
import { Helmet } from 'react-helmet';

interface Props {
  title?: string;
}

const SEO = ({ title }: Props) => {
  return (
    <Helmet title={title} />
  );
};

export default SEO;