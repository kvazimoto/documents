import './ProgramsListItem.css'
import DefaultButton from '../../../shared/DefaultButton/DefaultButton'
import defaultCountryImg from '../../../app/images/germany.png'

const ProgramsListItem = ({
    second,
    name,
    country,
    description,
    instantly,
    needed_sum,
    duration_days,
    advantages
}) => {
    return (
        <div className="program-list-section-item">
            <div className="program-list-section-item-blub"></div>

            <div className="program-list-section-item-index">
                <div className="program-list-section-item-top-section">

                    {/* Левая часть */}
                    <div className="program-list-section-item-top-section-left">
                        <h1>{second ? 'Способ отсрочки' : 'Страна и программа'}</h1>
                        <div className="program-list-section-item-top-section-left-con">
                            {second ? (
                                <h1 className="second-card-name-way">{name}</h1>
                            ) : (
                                <>
                                    <img
                                        src={country?.image || defaultCountryImg}
                                        alt={country?.name || 'Страна'}
                                    />
                                    <p>{country?.name || 'Не указана'}</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Правая часть */}
                    <div className="program-list-section-item-top-section-right">
                        <h1>Преимущества способа</h1>
                        <div className="program-list-section-item-top-section-right-con">
                            {advantages && advantages.length > 0 ? (
                                advantages.map((advantage) => (
                                    <p key={advantage.id}>- {advantage.name}</p>
                                ))
                            ) : (
                                <p>- Нет указанных преимуществ</p>
                            )}
                        </div>
                    </div>

                </div>

                {/* Название программы, если не отсрочка */}
                {!second && (
                    <div className="program-list-section-item-name-way">
                        <h1>{name}</h1>
                    </div>
                )}

                {/* Описание */}
                {description && (
                    <p className="program-list-section-item-description">
                        {description}
                    </p>
                )}

                {/* Срок выполнения */}
                <div className="program-list-section-item-dop-info">
                    <p>Срок выполнения</p>
                    <h1>
                        {instantly ? 'Моментально' : `от ${duration_days} дней`}
                    </h1>
                </div>

                {/* Стоимость услуги */}
                <div className="program-list-section-item-dop-info">
                    <p>Стоимость услуги</p>
                    <h1>{needed_sum ? `${needed_sum}$` : 'По запросу'}</h1>
                </div>

                <DefaultButton text="Подробнее" url="https://t.me/statum_support" />
            </div>
        </div>
    )
}

export default ProgramsListItem
