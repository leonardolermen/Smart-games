import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Header from '../header/header';
import styles from './GameScreenStyles'; // Importe os estilos do arquivo local
import QRCodeScanner from 'react-native-qrcode-scanner'; // Importe a biblioteca de leitura de QRCode



const GameScreen = ({ route }) => {
  const { name, description, imageLink, price, platform, stores } = route.params.game;
  const [discountedPrice, setDiscountedPrice] = useState(price);

  // função para salvar os endereços das lojas
  const getStoreAddress = (store) => {
    switch (store) {
      case 'Loja_Iguatemi':
        return 'Alameda Rio Negro, 111 - Alphaville Industrial, Barueri - SP';
      case 'Loja_União':
        return 'Av. dos Autonomistas, 1400 - Vila Yara, Osasco - SP';
      case 'Loja_Tamboré':
        return 'Av. Piracema, 669 - Tamboré, Santana de Parnaíba - SP';
      default:
        return '';
    }
  };

  // função para abrir o Maps
  const openGoogleMaps = (store) => {
    const address = encodeURIComponent(getStoreAddress(store));
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  };

  // Função para aplicar desconto
  const applyDiscount = () => {
    const discount = 0.2; // 20% de desconto
    const newPrice = price * (1 - discount);
    setDiscountedPrice(newPrice);
  };

  // Função para simular a compra
  const handleBuyNow = () => {
    // Aqui você pode adicionar a lógica para a compra, como redirecionar para a página de pagamento, etc.
    alert('Compra realizada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={{ uri: imageLink }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.platform}>Plataformas: {platform.join(', ')}</Text>
        <Text style={styles.price}>Preço: R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        <Text style={styles.discountedPrice}>Preço com desconto: R$ {discountedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        <View style={styles.storesContainer}>
          <Text style={styles.storesTitle}>Lojas:</Text>
          <View style={styles.storeButtonsContainer}>
            {stores.map((store, index) => (
              <TouchableOpacity key={index} onPress={() => openGoogleMaps(store)}>
                <Text style={styles.storeButton}>{store}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Comprar Agora</Text>
        </TouchableOpacity>

        
        
      </ScrollView>
    </View>
  )
}

export default GameScreen;
