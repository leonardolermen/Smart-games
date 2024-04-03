import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
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
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        placeholderTextColor="#ffffff80"
        onChangeText={text => setSearchTerm(text)} // Atualiza o estado do termo de pesquisa
        value={searchTerm}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredGames.map((game) => (
          <GameItem
            key={game.id}
            imageSource={{ uri: game.imageLink }}
            description={game.name}
            price={game.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2})}

          />
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
  searchInput: {
    backgroundColor: '#484848',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical:12,
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
  },
});

export default HomeScreen;
