import Navbar from "components/Navbar";

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
                </div>
            </div>
        </>
    );
}

export default Home;