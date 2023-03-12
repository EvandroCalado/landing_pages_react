import P from 'prop-types';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as Styled from './styles';
import Table from '../Table';

const Pricing = ({
  title,
  description_one,
  description_two,
  background,
  sectionId,
  table,
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase as="h1">
          {title}
        </Heading>
        <TextComponent>{description_one}</TextComponent>
        <TextComponent>{description_two}</TextComponent>
        <Table table={table} />
      </Styled.Container>
    </SectionBackground>
  );
};

Pricing.propTypes = {
  title: P.string.isRequired,
  description_one: P.string.isRequired,
  description_two: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
  table: P.arrayOf(
    P.shape({
      head: P.string.isRequired,
      body: P.string.isRequired,
      footer: P.string.isRequired,
    })
  ),
};

export default Pricing;
