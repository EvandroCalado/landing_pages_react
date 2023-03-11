import P from 'prop-types';
import * as Styled from './styles';

const Table = (args) => {
  return (
    <Styled.Container>
     <div>
      <table>
        <caption>Pricing table</caption>
        {args[0].map((table) => {
          console.log(table)
          
        })}
      </table>
     </div>
    </Styled.Container>
  );
};

Table.propTypes = {
  args: P.array.isRequired
};

export default Table;