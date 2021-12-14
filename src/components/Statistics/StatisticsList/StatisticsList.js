import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

function StatisticsList({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default StatisticsList;
