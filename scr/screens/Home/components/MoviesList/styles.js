import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  flatListContent: {
    flex: 1,
    padding: 7,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
