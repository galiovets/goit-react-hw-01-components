import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHead}>
        <tr className={s.tableHeadList}>
          <th className={s.tableHeadItem}>Type</th>
          <th className={s.tableHeadItem}>Amount</th>
          <th className={s.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(item => (
          <tr className={s.tableList} key={item.id}>
            <td className={s.tableItem}>{item.type}</td>
            <td className={s.tableItem}>{item.amount}</td>
            <td className={s.tableItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
