export default function BudgetStep({ value, onChange }) {
    return (
        <input
            type="number"
            value={value}
            onChange={e => onChange(parseInt(e.target.value))}
        />
    );
}
