import './styles.css';
import CarCardImg from '../../assets/images/car-card.png';

function CarCard () {
    return (
        <div className="card-container bg-light">
            <img src={CarCardImg} alt="Audi TT vermelho" className="car-content-img" />
            <div className="car-content-text">
                <h6>Audi Supra TT</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, alias.</p>
            </div>
            <button className="btn btn-primary car-content-button">
                Comprar
            </button>
        </div>
    );
}

export default CarCard;