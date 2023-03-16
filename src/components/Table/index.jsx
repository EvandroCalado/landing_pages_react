import P from 'prop-types';
import * as Styled from './styles';

const Table = ({ table = [] }) => {
  return (
    <Styled.Container>
      <Styled.Table>
        <caption>Pricing table</caption>
        <thead>
          <tr>
            {table.map((item) => (
              <th key={item.head}>{item.head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
          <tr>
            {table.map((item) => (
              <td key={item.body}>{item.body}</td>
            ))}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {table.map((item) => (
              <td key={item.footer}>{item.footer}</td>
            ))}
          </tr>
        </tfoot>
      </Styled.Table>
    </Styled.Container>
  );
};

Table.propTypes = {
  args: P.objectOf(
    P.shape([
      {
        head: P.string.isRequired,
        body: P.string.isRequired,
        footer: P.string.isRequired,
      },
    ])
  ),
};

export default Table;
