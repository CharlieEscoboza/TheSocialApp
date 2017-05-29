import React from 'react';
import { Button, View } from 'react-native';
import InputText from '../InputText';

import styles from './styles';

import colors from '../../config/colors';

const searchEvent = () => null;

const SearchForm = () => (
  <View style={styles.container}>
    <InputText style={styles.input} field="search" />
    <Button
      style={styles.button}
      onPress={searchEvent}
      title="S"
      color={colors.avocado}
      accessibilityLabel="Learn more about this green button"
    />
  </View>
);

export default SearchForm;
