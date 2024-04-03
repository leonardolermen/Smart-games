
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const GameDetailsScreen = ({ route }) => {
  const { name, description, imageLink, price, platform, stores } = route.params.game;

  // Função para obter o endereço da loja
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

  // Função para abrir o Google Maps com o endereço da loja
  const openGoogleMaps = (store) => {
    const address = encodeURIComponent(getStoreAddress(store));
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageLink }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Preço: R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      <Text style={styles.platform}>Plataforma: {platform.join(', ')}</Text>
      <View style={styles.storesContainer}>
        <Text style={styles.storesTitle}>Lojas:</Text>
        {stores.map((store, index) => (
          <TouchableOpacity key={index} onPress={() => openGoogleMaps(store)}>
            <Text style={styles.storeButton}>{store}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: 'white',
    marginBottom: 8,
  },
  price: {
    color: 'white',
    marginBottom: 8,
  },
  platform: {
    color: 'white',
    marginBottom: 8,
  },
  storesContainer: {
    marginTop: 8,
  },
  storesTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  storeButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
});

export default GameDetailsScreen;
