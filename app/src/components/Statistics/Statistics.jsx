import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './color';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       <h2 className={title}>Upload stats</h2>

//       <ul className="stat-list">
//         <li className="item">
//           <span className="label">.docx</span>
//           <span className="percentage">4%</span>
//         </li>
//         <li className="item">
//           <span className="label">.mp3</span>
//           <span className="percentage">14%</span>
//         </li>
//         <li className="item">
//           <span className="label">.pdf</span>
//           <span className="percentage">41%</span>
//         </li>
//         <li className="item">
//           <span className="label">.mp4</span>
//           <span className="percentage">12%</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
