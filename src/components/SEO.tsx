import { Helmet } from 'react-helmet';

interface Props {
  title?: string;
}

const SEO = ({ title }: Props) => {
  return (
    <Helmet title={title} meta={[
      { name: 'viewport', content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
    ]}/>
  );
};

export default SEO;
