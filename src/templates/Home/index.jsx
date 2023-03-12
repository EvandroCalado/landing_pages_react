import { useEffect, useState } from 'react';
import Base from '../Base';
import { mapData } from '../../api/map-data';
import PageNotFound from '../PageNotFound';
import Loading from '../Loading';
import GridTwoColumn from '../../components/GridTwoColumn';
import GridContent from '../../components/GridContent';
import GridSection from '../../components/GridSection';
import GridImage from '../../components/GridImage';
import Pricing from '../../components/Pricing';
import SectionContact from '../../components/SectionContact';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'landing-page';

    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`
        );
        const json = await data.json();
        const { attributes } = await json.data[0];
        const pageData = mapData([attributes]);

        setData(() => pageData[0]);
      } catch (error) {
        throw new Error(error);
      }
    };

    load();
  }, [location]);

  const { menu, sections, footerHtml, slug } = data;

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return (
    <Base
      links={menu?.links}
      html={footerHtml}
      logoData={{ link: menu?.link, text: menu?.text, image: menu?.image }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }

        if (component === 'section.pricing') {
          return <Pricing key={key} {...section} />;
        }

        if (component === 'section.section-contact') {
          return <SectionContact key={key} {...section} />;
        }

        return null;
      })}
    </Base>
  );
};

export default Home;
