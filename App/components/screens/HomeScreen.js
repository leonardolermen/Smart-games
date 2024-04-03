import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native';
import axios from 'axios'; 
import GameItem from '../gameItem/GameItem';
import Header from '../header/header';

const HomeScreen = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Função para buscar os dados dos jogos da API
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://192.168.86.98:8080/games/get');
        setGames(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados dos jogos:', error);
      }
    };

    // Chame a função para buscar os dados dos jogos
    fetchGames();
  }, []);

  // Função para filtrar os jogos com base no termo de pesquisa
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
          onChangeText={text => setSearchTerm(text)} // Atualiza o estado do termo de pesquisa
          value={searchTerm}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredGames.map((game) => (
          <View key={game.id}>
            <GameItem
              imageSource={{ uri: game.imageLink }}
              description={game.name}
              price={game.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: '#484848',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: '80%',
  },
  price: {
    color: 'white',
    marginTop: 4,
  },
});

export default HomeScreen;
