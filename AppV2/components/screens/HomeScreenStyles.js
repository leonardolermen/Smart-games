import { StyleSheet } from 'react-native';

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

export default styles;
