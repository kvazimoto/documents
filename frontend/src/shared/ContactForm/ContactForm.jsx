// src/shared/ContactForm/ContactForm.jsx
import './ContactForm.css'
import { useState } from 'react';
import axios from '../../api/axios'
import { Link } from 'react-router-dom';

const ContactForm = ({ answers, selectedWayId }) => {
  const [telegram, setTelegram] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const normalizeSelectedWayId = (id) => {
    // если уже число — возвращаем
    if (typeof id === 'number' && Number.isFinite(id)) return id;
    // если строка, попробуем привести к числу
    if (typeof id === 'string') {
      const n = Number(id);
      if (!Number.isNaN(n) && Number.isFinite(n)) return n;
    }
    // иначе — возвращаем null (не указываем FK)
    return null;
  };

  const handleSubmit = async () => {
    // базовая валидация (опционально)
    if (!telegram) {
      alert('Введите ваш Telegram (например @username)');
      return;
    }

    const transfer_way = normalizeSelectedWayId(selectedWayId);

    setSending(true);
    try {
      await axios.post('/contactrequests/', {
        telegram,
        transfer_way,       // либо числовой id, либо null
        answers_json: answers,
      });
      setSent(true);
    } catch (err) {
      console.error('ContactForm submit error', err);
      // показать читаемое сообщение пользователю
      alert('Не удалось отправить заявку. Попробуйте позже.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return <p>Спасибо за обращение! <Link to='/'>На главную</Link></p>;
  }

  return (
    <div className='start-with-form-container-contact-block'>
      <h3>Хотите, чтобы мы с вами связались?</h3>
      <div className="start-with-form-container-contact-block-con">
        <input
          type="text"
          placeholder="@telegram"
          value={telegram}
          onChange={e => setTelegram(e.target.value)}
        />
        <button onClick={handleSubmit} disabled={sending}>
          {sending ? 'Отправка...' : 'Отправить'}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
