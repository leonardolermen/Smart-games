// Header.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Smart Games</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#343434',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default Header;
