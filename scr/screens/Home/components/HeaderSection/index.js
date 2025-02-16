import React from 'react';
import { View } from 'react-native';

import { TitleSecondary } from '../../../../components/text';
import styles from './styles';

function HeaderSection({ title }) {
  return (
    <View style={styles.headerContainer}>
      <TitleSecondary>{title}</TitleSecondary>
    </View>
  );
}

export default HeaderSection;
