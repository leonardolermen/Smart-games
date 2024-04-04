

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GameItem = ({ imageSource, description, price, platforms }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Preço: R${price}</Text>
        <View style={styles.platformsContainer}>
          <Text style={styles.platformsTitle}>Plataformas:</Text>
          {platforms.map((platform, index) => (
            <Text key={index} style={styles.platform}>{platform}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  platformsContainer: {

    marginTop: 8,
  },
  platformsTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  platform: {
    color: 'white',
    marginBottom: 4,
  },
  });

export default GameItem;
