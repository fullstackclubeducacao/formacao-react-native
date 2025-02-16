import React from 'react';
import { View } from 'react-native';

import customStyles from './styles';

function Separator({ size = 20, direction = 'horizontal' }) {
  const styles =
    direction === 'horizontal'
      ? customStyles.horizontalStyles({ size })
      : customStyles.verticalStyles({ size });

  return <View style={styles.separator} />;
}

export default Separator;
