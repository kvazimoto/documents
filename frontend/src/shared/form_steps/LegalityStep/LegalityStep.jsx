export default function LegalityStep({ value, onChange }) {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    checked={value === true}
                    onChange={() => onChange(true)}
                />
                Да
            </label>
            <label>
                <input
                    type="radio"
                    checked={value === false}
                    onChange={() => onChange(false)}
                />
                Нет
            </label>
        </div>
    );
}
