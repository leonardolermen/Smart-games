import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    padding: 16,
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 8,
    alignSelf: "center",
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
    fontWeight: 'bold',

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
  storeButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centraliza os botões horizontalmente
    marginTop: 8, // Adiciona espaço entre o título e os botões
  },
  storeButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8, // Ajusta o espaçamento vertical dentro do botão
    paddingHorizontal: 16, // Ajusta o espaçamento horizontal dentro do botão
    marginBottom: 8, // Adiciona espaço entre os botões
    marginRight: 8, // Adiciona espaço entre os botões
    color: 'white',
    textAlign: 'center', // Centraliza o texto dentro do botão
  },
  buyButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
