import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'; 
import GameItem from '../gameItem/GameItem';
import Header from '../header/header';
import styles from './HomeScreenStyles'; // Importe os estilos do arquivo local

const HomeScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://192.168.86.98:8080/games/get');
        setGames(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados dos jogos:', error);
      }
    };

    fetchGames();
  }, []);

  const handleGameDetails = (game) => {
    navigation.navigate('GamesScreen', { game });
  };

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          placeholderTextColor={'white'}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredGames.map((game) => (
          <TouchableOpacity
            key={game.id}
            onPress={() => handleGameDetails(game)}
          >
            <GameItem
              imageSource={{ uri: game.imageLink }}
              description={game.name}
              price={game.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              platforms={game.platform}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
