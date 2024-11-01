import Info from './Info'
import './LandingPage.css'
import Navbar from './Navbar'

export default function LandingPage() {
    return (
        <div className="Landing-Page">
            <Navbar />
            <Info/>
        </div>
    )
}