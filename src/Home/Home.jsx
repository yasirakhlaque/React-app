import CoreServices from "./Core Services/Core-Services";
import LandingPage from "./Landing-Page/LandingPage";

export default function Home(){
    let home = {
       margin:"auto"
    }
    return (
        <div style={home}>
        <LandingPage />
        <CoreServices/>
        </div>
    )
}