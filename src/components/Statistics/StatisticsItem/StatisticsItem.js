import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

function StatisticsItem({ label, percentage }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
