import PropTypes from 'prop-types'; // типи пропсів
import css from './TransactionHistory.module.css'; // стилізація компонента

// Компонент транзакцій
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {/* проходимо по кожному елементу масиву */}
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            // створюємо рядок таблиці з даними про кожну транзакцію
            <tr className={css.tr} key={id}>
              {/* Ключом кожного створеного рядка є id */}
              <td
                className={css.td}
                style={{
                  textTransform: 'capitalize', // відображення першої літери - великою літерою
                  color: '#818181',
                }}
              >
                {type}
              </td>
              <td
                className={css.td}
                style={{
                  color: '#818181',
                }}
              >
                {amount}
              </td>
              <td
                className={css.td}
                style={{
                  color: '#818181',
                }}
              >
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Типізація для компонента
TransactionHistory.propTypes = {
  // Перевірка, чи переданий параметр є масивом,
  // і приймає PropTypes.shape в якості параметра.
  transactions: PropTypes.arrayOf(
    // shape - визначає форму об'єкта, який передається у властивість
    // і вимагає, щоб властивості цього об'єкта відповідали певній формі (типу даних)
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Діма Берестень
