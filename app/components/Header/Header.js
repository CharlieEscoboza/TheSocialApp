import React from 'react';
import { View, Text } from 'react-native';

import SearchForm from '../SearchForm';

import styles from './styles';

const Header = () => (
  <View style={styles.mainHeader}>
    <Text style={styles.appTitle}>
      The Social App
    </Text>
    <View style={styles.container}>
      <View style={styles.hamburguer}>
        <Text>H</Text>
      </View>
      <View style={styles.form}>
        <SearchForm />
      </View>
    </View>
  </View>
);

export default Header;
