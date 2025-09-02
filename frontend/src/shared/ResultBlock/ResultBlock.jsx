
import './ResultBlock.css';
import { Link } from 'react-router-dom';

const ResultBlock = ({ results, selectedWayId, onSelectWay, limit = 3 }) => {
  if (!results || results.length === 0) {
    return <p>Подходящих способов не найдено.</p>;
  }

  return (
    <div className='start-with-form-container-result-block'>
      <h3>Подходящие варианты:</h3>
      <ul>
        {results.slice(0, limit).map((r) => (
          <li key={r.id} style={{ marginBottom: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="radio"
                name="transfer_way"
                checked={selectedWayId === r.id}
                onChange={() => onSelectWay(r.id)}
              />
              <strong>{r.name}</strong>
              {r.country?.name ? <> — {r.country.name}</> : null}
              {r.country?.image && (
                <img
                  src={r.country.image}
                  alt={r.country.name}
                  style={{ width: 20, marginLeft: 5 }}
                />
              )}
              {/* {r.instantly ? <span style={{ marginLeft: 8 }}>⚡ Моментально</span> : null} */}
            </label>
          </li>
        ))}
      </ul>

      <p>Все способы можно посмотреть на странице с <Link to='/our-programs'>программами</Link></p>
    </div>
  );
};

export default ResultBlock;
