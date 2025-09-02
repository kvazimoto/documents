import { Outlet } from "react-router-dom"
import Header from "../widgets/Header/Header"
import Footer from "../widgets/Footer/Footer"
import './MainLayout.css'

export default function MainLayout() {
    return(
        <>
            <div id="content">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}