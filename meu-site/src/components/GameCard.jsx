import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../styles/card.css';

const GameCard = ({ game }) => {
  const [showDescription, setShowDescription] = useState(false);


  // Function to get store address
  const getStoreAddress = (store) => {
    switch (store) {
      case 'Loja Iguatemi':
        return 'Alameda Rio Negro, 111 - Alphaville Industrial, Barueri - SP';
      case 'Loja União':
        return 'Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP';
      case 'Loja Tamboré':
        return 'Av. Piracema, 669 - Tamboré, Santana de Parnaíba - SP';
      default:
        return '';
    }
  };

  //função para postar uma compra
  const handleBuyNowClick = () => {
    axios.post('http://localhost:8080/purchases/post', {
      gameName: game.name,
      value: game.price
    })
    .then(response => {
      console.log('Compra realizada com sucesso:', response.data);
      alert('Compra realizada com sucesso:');
    })
    .catch(error => {
      console.error('Erro ao realizar compra:', error);
      alert('Erro ao realizar compra:');

    });
  };


  // Function to open Maps
  const handleStoreClick = (store) => {
    const address = getStoreAddress(store);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`);
  };

  // para mostrar ou esconder a descrição do game
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Col md={3} className="mb-4">
      <Card>
      <Card.Img variant="top" src={game.imageLink} className="card-img-top" style={{ height: '500px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{ color: 'white' }}>{game.name}</Card.Title>

          {showDescription && <Card.Text>{game.description}</Card.Text>}

          <Button variant="link" onClick={toggleDescription}>
            {showDescription ? 'Ocultar Descrição' : 'Ver Descrição'}
          </Button>
          
          <Card.Text>Preço: R${game.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Card.Text>
          <Card.Text>Plataformas: {game.platform.join(', ')}</Card.Text>

          <div className="store-btn-container">
            {game.stores.map((store, index) => (
              <div key={index} className="store-btn">
                <Button variant="secondary" onClick={() => handleStoreClick(store)}>{store}</Button>
              </div>
            ))}
          </div>

          <div className="card-btn">
            <Button variant="primary" onClick={handleBuyNowClick}>Comprar Agora</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GameCard;
