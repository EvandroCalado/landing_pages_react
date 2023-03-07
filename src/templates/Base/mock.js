import { mock } from '../../components/Navbar/mock';
import { args as GridMock } from '../../components/GridSection/args';
import GridSection from '../../components/GridSection';

const args = {
  children: (
    <>
      <GridSection {...GridMock} background />
      <GridSection {...GridMock} />
      <GridSection {...GridMock} background />
      <GridSection {...GridMock} />
      <GridSection {...GridMock} background />
      <GridSection {...GridMock} />
    </>
  ),
  links: mock,
  logoData: {
    text: 'logo',
    link: '#',
  },
  html: '<p>Teste de footer</p>',
};

export default args;
