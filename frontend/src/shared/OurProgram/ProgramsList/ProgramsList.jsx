import './ProgramsList.css'
import ProgramSection from '../ProgramSection/ProgramSection'
import { useState, useEffect } from 'react'
import axios from '../../../api/axios'

const ProgramsList = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get('/transfer_ways/')
            .then(res => {
                setList(res.data)
            })
            .catch(err => {
                console.error(err)
                setError('Ошибка при запуске')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>

    const legalWays = list.filter(item => item.obuchnui)
    const illegalWays = list.filter(item => item.nelegal)
    const addServices = list.filter(item => item.is_add_services)
    const delays = list.filter(item => item.otsrochka)

    return(
        <>
            <section className="program-list-section default-sections-properties program-list-section-media">

                {illegalWays.length > 0 && (
                    <ProgramSection title="Пакеты START" data={illegalWays} />
                )}

                {delays.length > 0 && (
                    <ProgramSection title="Пакеты TRANQUILITY" data={delays} second={true}/>
                )}

                {legalWays.length > 0 && (
                    <ProgramSection title="Пакеты LIBERATION" data={legalWays} />
                )}

                {addServices.length > 0 && (
                    <ProgramSection title="Дополнительные услуги" data={addServices} second={true} />
                )}
                
            </section>
        </>
    )
}

export default ProgramsList