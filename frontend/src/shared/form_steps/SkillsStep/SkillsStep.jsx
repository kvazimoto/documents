export default function SkillsStep({ options, value, onToggle }) {
    return (
        <div>
            {options.map(skill => (
                <label key={skill.id} style={{ display: 'block', marginBottom: 5 }}>
                    <input
                        type="checkbox"
                        value={skill.id}
                        checked={value.includes(skill.id)}
                        onChange={() => onToggle(skill.id)}
                    />
                    {skill.name}
                </label>
            ))}
        </div>
    );
}
