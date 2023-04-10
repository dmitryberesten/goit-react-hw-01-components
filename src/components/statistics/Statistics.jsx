import PropTypes from 'prop-types'; // типи пропсів
import css from './Statistics.module.css'; // стилізація компонента

// функція для рандомного кольору статистики
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Компонент з розміткою для відображення списку статистичних даних
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {/* Якщо title не є порожнім рядком, то він відображається в якості заголовку */}
      {title && <h2 className={css.title}>{title}</h2>}

      {/* список статистик */}
      <ul className={css.statList}>
        {/* перебір елементів статистик */}
        {stats.map((stat) => {
          return (
            <li
              // ключом для кожного елементу списку є id
              key={stat.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              className={css.item}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Типізація для компонента
Statistics.propTypes = {
  title: PropTypes.string,

  // Перевірка, чи переданий параметр є масивом,
  // і приймає PropTypes.shape в якості параметра.
  stats: PropTypes.arrayOf(
    // shape - визначає форму об'єкта, який передається у властивість
    // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Діма Берестень
