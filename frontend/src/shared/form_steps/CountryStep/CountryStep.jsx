export default function CountryStep({ options, value, onChange }) {
    return (
        <select value={value || ''} onChange={e => onChange(parseInt(e.target.value))}>
            <option value="">-- Выберите страну --</option>
            {options.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
            ))}
        </select>
    );
}
