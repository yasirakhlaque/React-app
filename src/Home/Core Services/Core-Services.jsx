// CoreServices.js
import Cards from "./cards";
import Header from "./Header";
import { cardData } from "./Card-Data";
import './Core-Services.css';

export default function CoreServices() {
    const coreStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    return (
        <div style={coreStyle} className="Cards">
            <Header />
            <div className="Cards-container">
                {cardData.map((card, index) => (
                    <Cards
                        key={index}
                        logo={card.logo}
                        title={card.title}
                        des={card.des}
                        i1={card.i1}
                        i2={card.i2}
                        i3={card.i3}
                        btn={card.btn}
                    />
                ))}
            </div>
        </div>
    );
}
