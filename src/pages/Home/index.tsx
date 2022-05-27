import Navbar from "components/Navbar";
import CarBanner from '../../assets/images/car-banner.png';
import './styles.css';

function Home () {
    return (
        <>
            <Navbar/>
            <div className="home-content">
                <div className="home-banner bg-primary">
                    <div className="home-banner-container">
                    <h6>O carro perfeito pra você</h6>
                    <p>
                        Conheça nossos carros e dê mais um passo importante  na realização do seu sonho
                    </p>
                    </div>
                    <div className="home-banner-image">
                        <img src={CarBanner} alt="Audi Amarelo"/>
                    </div>
                </div>
                <div className="home-button bg-light">
                    <button className="btn btn-primary">Ver Catálogo</button>
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </>
    );
}

export default Home;