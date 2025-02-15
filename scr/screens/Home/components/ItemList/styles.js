import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    minHeight: 82,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 19,
  },

  textContainer: {
    gap: 5,
  },
});

export default style;
