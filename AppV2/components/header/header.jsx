import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Smart Games</Text>
      </View>
    </TouchableOpacity>
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
