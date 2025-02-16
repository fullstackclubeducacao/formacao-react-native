import { StyleSheet } from 'react-native';

const horizontalStyles = ({ size }) =>
  StyleSheet.create({
    separator: {
      width: size,
    },
  });

const verticalStyles = ({ size }) =>
  StyleSheet.create({
    separator: {
      height: size,
    },
  });

const styles = {
  horizontalStyles,
  verticalStyles,
};

export default styles;
