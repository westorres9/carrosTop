import { Link, NavLink } from 'react-router-dom';
import CarBanner from '../../assets/images/car-banner.png';
import './styles.css';

const Home = () => {
  return (
    <div className="home-content">
      <div className="home-banner bg-primary">
        <div className="home-banner-container">
          <h6>O carro perfeito para você</h6>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-banner-image">
          <img src={CarBanner} alt="Audi amarelo" />
        </div>
      </div>
      <div className="home-button bg-light">
        <Link to="/products">
          <button className="btn btn-primary">Ver catálogo</button>
        </Link>
        
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
