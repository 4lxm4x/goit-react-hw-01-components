import {
  Transactions,
  Thead,
  Trows,
  Theadcells,
  Tcells,
  Tbody,
  TcellsAmount,
  TheadRows,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <Thead>
        <TheadRows>
          <Theadcells>Type</Theadcells>
          <Theadcells>Amount</Theadcells>
          <Theadcells>Currency</Theadcells>
        </TheadRows>
      </Thead>
      <Tbody>
        {items.map(item => {
          return (
            <Trows key={item.id}>
              <Tcells>{item.type}</Tcells>
              <TcellsAmount>{item.amount}</TcellsAmount>
              <Tcells>{item.currency}</Tcells>
            </Trows>
          );
        })}
      </Tbody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
