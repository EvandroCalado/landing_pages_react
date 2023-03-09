import { useEffect, useState } from 'react';
import Base from '../Base';
import { mapData } from '../../api/map-data';
import PageNotFound from '../PageNotFound';
import Loading from '../Loading';

const Home = () => {
  const [data, setData] = useState([]);
  // const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?populate=deep'
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
  }, []);


  const { menu, sections, footerHtml } = data;

  console.log(menu?.link);


  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return (
    <Base links={menu?.links} html={footerHtml} >
      <h1>Olá mundo</h1>
      <h1>Olá mundo</h1>
      <h1>Olá mundo</h1>
    </Base>
  );
};

export default Home;
