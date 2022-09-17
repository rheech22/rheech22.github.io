import { Link } from "gatsby";

import SEO from "../components/SEO";

export default () => (<Link to="/">Go home</Link>);

export const Head = () => (
  <SEO subTitle='404'/>
);
