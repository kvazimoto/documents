import DefaultSkeepSize from "../../shared/DefaultSkeepSize/DefaultSkeepSize"
import './Page404.css'

export default function Page404() {
    return(
        <>
            <title>404</title>
            <DefaultSkeepSize />
            <section className="page-not-found-page">
                <h1>404</h1>
                <p>Такой страницы нет...</p>
            </section>
        </>
    )
}