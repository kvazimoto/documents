import './ProgramSection.css'
import ProgramsListItem from '../ProgramsListItem/ProgramsListItem'
import img from '../../../app/images/svg/mini-star.svg'

const ProgramSection = ({ title, data, second }) => {
    return (
        <div className="program-list-section-container">
            <div className="program-list-section-container-title">
                <img src={img} alt="" />
                <h1>{title}</h1>
            </div>

            <div className="program-list-section-container-content">
                {data && data.length > 0 ? (
                    data.map(item => (
                        <ProgramsListItem
                            key={item.id}
                            second={second}
                            name={item.name}
                            country={item.country} // передаём весь объект
                            description={item.description}
                            instantly={item.instantly}
                            needed_sum={item.needed_sum}
                            duration_days={item.duration_days}
                            skills={item.skills}
                            advantages={item.advantages}
                            documents={item.documents}
                        />
                    ))
                ) : (
                    <p>Нет доступных способов</p>
                )}
            </div>
        </div>
    )
}

export default ProgramSection
